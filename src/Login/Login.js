import axios from "axios"
import { useState } from "react"
import { Button, message } from 'antd';

function Login_Page() {
    const [messageApi, contextHolder] = message.useMessage();
    const [result, setresult] = useState([])
    const [login, setlogin] = useState({
        email: '',
        password: ''
    })
    let login_name, login_value
    const loginDataSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost/PHP_Project/PHP_With_React/login.php', login)
            .then(function (response) {
                console.log(response);
                setresult([response.data])
                console.log(result)
                if ((login.email == response.data.email) && (login.password == response.data.password)) {
                    messageApi.open({
                        type: 'success',
                        content: 'Successfully login...',
                    });
                    window.location.href = `/dash/${response.data.id}`
                }
                else {
                    messageApi.open({
                        type: 'error',
                        content: 'Invalid password...',
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        // window.location.href = `/dash${response.data.id}`
    }
    const loginInfo = (l) => {
        login_name = l.target.name
        login_value = l.target.value
        setlogin({ ...login, [login_name]: login_value })
    }

    return (
        <>
            {contextHolder}
            <div className="login-part">
                <div className="login-body">
                    <h1 className="mb-4">Login Form..</h1>
                    <form action="" onSubmit={loginDataSubmit}>
                        <div className="field-email">
                            <div className="email-part d-flex justify-content-between align-items-center mb-4">
                                <h6 className="m-0">Email : </h6>
                                <input className="input-field mb-0" type="email" name="email" value={login.email} placeholder="Enter Email" onChange={loginInfo} />
                            </div>
                            <div className="pass-part d-flex justify-content-center align-items-center">
                                <h6>Password : </h6>
                                <input className="input-field" type="password" name="password" value={login.password} placeholder="Enter Password" onChange={loginInfo} />
                            </div>
                            <div className="submit-part mt-5 mb-3">
                                <button className="submit-btn">Submit the record.....</button>
                            </div>
                            <a className="register-link" href="/home">Register ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login_Page