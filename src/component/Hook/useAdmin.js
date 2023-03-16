import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://car-parts-house-back-end.onrender.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    setAdmin(data.admin);
                    setLoading(false);



                })
        }
    }, [user])
    return [admin, loading]
}
export default useAdmin;