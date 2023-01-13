import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

function Select() {
    const [result, setresult] = useState([])

    useEffect(() => {
        axios.get('http://localhost/PHP_Project/PHP_With_React/select.php')
            .then(function (response) {
                console.log(response)
                setresult(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    const delRecord = (i) => {
        const d_id = i
        console.log(d_id)
        axios.post('http://localhost/PHP_Project/PHP_With_React/delete.php', {
            del_id: d_id
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
        // window.location.reload();
        // window.location.href = '/home'
    }
    return (
        <>
            <div className="view">
                <div className="header" style={{ textAlign: "center", marginTop: "6vh" }}>
                    <h1>Record List...</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Image</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        {
                            result.map((items, index) => {
                                return (
                                    <>
                                        <tr key={items.id}>
                                            <td>{items.id}</td>
                                            <td>{items.name}</td>
                                            <td>{items.email}</td>
                                            <td>{items.password}</td>
                                            <td><img style={{ objectFit: "cover" }} src={`http://localhost/PHP_Project/PHP_With_React/img/${items.img}`} alt="" width={100} height={100} /></td>
                                            <td>
                                                <Button className='view-btn' type="primary">
                                                    <a href={`/edit/${items.id}`}><i className="fa-solid fa-pen-to-square"></i></a>
                                                </Button>
                                            </td>

                                            <td>
                                                <Button className='view-btn' type="primary">
                                                    <a href="#" onClick={()=>delRecord(items.id)} ><i className="fa-solid fa-trash-can"></i></a>
                                                </Button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                        <tr>
                            <td colSpan={7} align='center'><a href="/home">Back to the register form</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Select
{/* <td><a href="#" onClick={() => editbtn(items.id)}>Edit</a></td> */ }