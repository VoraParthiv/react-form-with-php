import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import FormData from 'form-data';

function Home() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    // const [img, setimg] = useState('')
    const image = useRef()

    const submitform = (e) => {
        e.preventDefault()
        if (name == '') {
            alert('Please, Enter your name...')
        }
        else if (email == '') {
            alert('Please, Enter your email...')
        }
        else if (pass == '') {
            alert('Please, Enter your password...')
        }
        else {
            const info = new FormData()
            info.append('user_name', name)
            info.append('user_email', email)
            info.append('user_pass', pass)
            info.append('user_img', image.current.files[0])

            axios.post('http://localhost/PHP_Project/PHP_With_React/insert.php', info)
                .then(function (response) {
                    console.log(response);
                    alert('Data is successfully inserted...')
                    // window.location.reload()
                })
                .catch(function (error) {
                    console.log(error);
                })
            window.location.href = '/'
        }
    }
    return (
        <>
            <div className="App">
                <div className="form">
                    <div className="form-body text-center">
                        <form autoComplete="on" onSubmit={submitform} encType="multipart/form-data" method='post'>
                            <div className="header-part mb-5">
                                <h1>Form..</h1>
                            </div>
                            <div className="middle-part">
                                <div className="name-part d-flex align-items-center justify-content-between">
                                    <span>Name : </span>
                                    <input className='input-field' type="text" name="name" value={name} placeholder='Enter Name...' onChange={(e) => setname(e.target.value)} autoComplete="on" />
                                </div>
                                <div className="name-part d-flex align-items-center justify-content-between mt-3">
                                    <span>Email : </span>
                                    <input className='input-field' type="email" name="email" value={email} placeholder='Enter Email...' onChange={(e) => setemail(e.target.value)} autoComplete="on" />
                                </div>
                                <div className="name-part d-flex align-items-center justify-content-between mt-3">
                                    <span>Password : </span>
                                    <input className='ms-3 input-field' type="password" name="password" value={pass} placeholder='Enter Password...' onChange={(e) => setpass(e.target.value)} autoComplete="on" />
                                </div>
                                <div className="name-part d-flex align-items-center justify-content-between mt-3">
                                    <span>Image : </span>
                                    {/* <input className='ms-3 input-field' type="file" name="image" onChange={(e) => setimg(e.target.files[0])} autoComplete="on" /> */}
                                    <input className='ms-3 input-field' type="file" name="image" ref={image} autoComplete="on" />
                                </div>
                            </div>
                            <div className="bottom-part mt-5">
                                <button type='submit' name='save' className='btn-submit'>Submit the data..</button>
                            </div>
                        </form>
                        <div className="bottom-part mt-4">
                            <a href="/select">
                                <button>View Record...</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home