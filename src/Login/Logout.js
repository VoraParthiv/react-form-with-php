import axios from "axios"
import { useEffect } from "react"
function Logout() {
    useEffect(() => {
        axios.post('http://localhost/PHP_Project/PHP_With_React/logout.php')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
            window.location.href = '/'
    }, [])
    return (
        <>
            
        </>
    )
}
export default Logout