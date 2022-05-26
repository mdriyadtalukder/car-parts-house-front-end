import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {

    //questions and answers
    return (
        <div>
            <div className='container'>
                <h1 className='text-center mt-3 text-white fw-bold'>Questions and answers</h1>
                <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>How will you improve the performance of a React Application?</h3>
                                <p>Performance-related problems in web app is not new. Developers have been encountering these issues since a longer period of time. Here's why when any new language originates, developers are bound to face performance issues with it. React is one such example of language. It boasts of a DOM which is very fast. Fast in a way that sometimes, it makes many irrelevant components render the tree. This makes a UI glitch and sometimes developers gets hesitant to continue with the language. However, there are some ways through which developers can solve the performance related problems in React based web app. Let's explore some of these in this article.
                                    React Performance – 13 Ways to Optimize Performance of your React App
                                    React is one such example of UI framework which is considered best in terms of rendering performance. Although, since it’s virtual DOM is famous for effectively rendering components, it’s still possible to run into performance issues in medium to large web applications</p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>What are the different ways to manage a state in a React application?</h3>
                                <p>There are four main types of state you need to properly manage in your React apps:Local (UI) state – Local state is data we manage in one or another component.

                                    Local state is most often managed in React using the useState hook.

                                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                                    Global (UI) state – Global state is data we manage across multiple components.

                                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                                    Sometimes state we think should be local might become global.

                                    Server state – Data that comes from an external server that must be integrated with our UI state.

                                </p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>How does prototypical inheritance work?</h3>
                                <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.

                                    Prototype-based programming uses generalized objects, which can then be cloned and extended. Using fruit as an example, a "fruit" object would represent the properties and functionality of fruit in general. A "banana" object would be cloned from the "fruit" object and general properties specific to bananas would be appended. Each individual "banana" object would be cloned from the generic "banana" object. Compare to the class-based paradigm, where a "fruit" class would be extended by a "banana" class.The first prototype-oriented programming language was Self, developed by David Ungar and Randall Smith in the mid-1980s to research topics in object-oriented language design.</p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>ou have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                                <p>This is find method.I will solve this situation by find method.The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found.The find method executes the callbackFn function once for each index of the array until the callbackFn returns a truthy value. If so, find immediately returns the value of that element. Otherwise, find returns undefined.

                                    callbackFn is invoked for every index of the array, not just those with assigned values. This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

                                    If a thisArg parameter is provided to find, it will be used as the this value inside each invocation of the callbackFn. If it is not provided, then undefined is used.

                                    The find method does not mutate the array on which it is called, but the function provided to callbackFn can. If so, the elements processed by find are set before the first invocation of callbackFn. Therefore:</p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>What is a unit test? Why should write unit tests?</h3>
                                <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, or an individual method. By writing tests first for the smallest testable units, then the compound behaviors between those, one can build up comprehensive tests for complex applications.

                                    To isolate issues that may arise, each test case should be tested independently. Substitutes such as method stubs, mock objects, fakes, and test harnesses can be used to assist testing a module in isolation.

                                    During development, a software developer may code criteria, or results that are known to be good, into the test to verify the unit's correctness. During test case execution, frameworks log tests that fail any criterion and report them in a summary. For this, the most commonly used approach is test - function - expected value.</p>
                            </div>
                        </div>
                    </div >
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;