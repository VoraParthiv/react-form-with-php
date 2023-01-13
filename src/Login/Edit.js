import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { notification } from 'antd';

function Edit_Dash() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [img, setimg] = useState('')
    const [api, contextHolder] = notification.useNotification();
    const { edit_id } = useParams()
    const _id = `${edit_id}`

    useEffect(() => {
        axios.post('http://localhost/PHP_Project/PHP_With_React/edit.php', {
            up_id: _id
        })
            .then(function (response) {
                console.log(response);
                setname(response.data.name)
                setemail(response.data.email)
                setimg(response.data.img)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const submitFormdata = (e) => {
        e.preventDefault();
        const info = new FormData()
        info.append('up_id', _id)
        info.append('user_name', name)
        info.append('user_email', email)
        info.append('user_img', img)
        axios.post('http://localhost/PHP_Project/PHP_With_React/insert.php', info)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
        api.open({
            message: 'Update Form',
            description:
                'Your data is successfully updated...',
            duration: 0,
        })
        window.location.href = `/dash/${_id}`
    }
    return (
        <>
        <img src={`http://localhost/PHP_Project/PHP_With_React/img/${img}`} alt="" width={100} height={100} />
            <div className='edit'>
                {contextHolder}
                <form autoComplete='on' onSubmit={submitFormdata} encType='multipart/form-data'>
                    <table style={{ marginTop: "20vh" }}>
                        <tbody>
                            <tr>
                                <th>Name : </th>
                                <td><input type="text" className='input-edit' name='name' value={name} onChange={(e) => setname(e.target.value)} autoComplete="on" /></td>
                            </tr>
                            <tr>
                                <th>Email : </th>
                                <td><input type="email" className='input-edit' name='email' value={email} onChange={(e) => setemail(e.target.value)} autoComplete="on" /></td>
                            </tr>
                            <tr>
                                <th>Image : </th>
                                <td><input className='ms-3 input-field' type="file" name="image" onChange={(e) => setimg(e.target.files[0])} autoComplete="on" /></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className='submit-btn'>Updata Record</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}
export default Edit_Dash