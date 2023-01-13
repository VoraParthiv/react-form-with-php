import { useState, useEffect } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";
function Dashboard() {
    const [result, setresult] = useState([])
    const { user_id } = useParams()
    useEffect(() => {
        axios.post('http://localhost/PHP_Project/PHP_With_React/dash.php', { user_id: user_id })
            .then(function (response) {
                console.log(response)
                setresult(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    return (
        <>
            <div className="dash text-center">
                <div className="dash-body">
                    <div className="dash-img">
                        <h2>User Profile : </h2>
                        <img src={`http://localhost/PHP_Project/PHP_With_React/img/${result.img}`} alt="" width={130} height={130} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="dash-content mt-4">
                        <div className="dash-content-top">
                            <span>User Name : </span>
                            <h2> {result.name} </h2>
                        </div>
                        <div className="dash-content-bottom">
                            <span>User Email : </span>
                            <h2> {result.email} </h2>
                        </div>
                    </div>
                    <div className="dash-btns mt-4">
                        <button className="me-3">
                            <a href={`/edit-dash/${user_id}`}>Edit</a>
                        </button>
                        <button className="me-3">
                            <a href="#">Add</a>
                        </button>
                        <button className="me-3">
                            <a href="view.php">View</a>
                        </button>
                        <button>
                            <a href="cha_pass.php">Change password</a>
                        </button>
                    </div>
                    <div className="log-btns mt-4">
                        <a href="/logout">Logout<i className="fa-solid fa-right-from-bracket ps-2"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard