import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ myorder }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [load, setload] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');



    const price = myorder?.price;
    console.log(price);

    useEffect(() => {
        if (price) {
            fetch('https://car-parts-house-back-end.onrender.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                        console.log(data)
                    }
                });
        }

    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');
        setSuccess('');
        setload(true)

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: myorder?.name,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message || '');
            setload(false);

        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congratulation, Your payment is completed!!');

            const transactionId = paymentIntent.id

            fetch(`https://car-parts-house-back-end.onrender.com/myorder/${myorder?._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ transactionId }),
            }, [])
                .then(res => res.json())
                .then(data => {
                    setload(false);
                    console.log(data);
                })



        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button id='btnn' className='btn text-white fw-bold' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-danger'>{cardError}</p>
            }
            {
                success && <div className='text-success'>
                    <p>{success}</p>
                    <p>Your Transaction Id: <span className='text-info fw-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;