import React, { useState, useEffect } from "react"
import "./listUser.css"

function ListUser() {
    const listUser = JSON.parse(localStorage.getItem('listUser')) || []
    const [infoEdit, setinfoEdit] = useState({
        email: "",
        password: "",
    
    })
    const deleteUser = (index)=>{
        const dataAfterDelete = listUser.filter((e, vt)=> vt !==index )
        localStorage.setItem('listUser', JSON.stringify(dataAfterDelete));
        console.log(dataAfterDelete)
    }
    const editUser = (index) => {
        const dataEdit = listUser.find((e, vt) => vt === index)
        console.log(dataEdit)
        setinfoEdit({
            email: dataEdit.email,
            password: dataEdit.password,
        })
    }
    const dataFind = listUser.find(e => e.email === emailUpdate)
    if (dataFind) {
        alert("TK Đã được đăng ký")
    } else {
        listUser[index].email = infoEdit.email
        listUser[index].password=infoEdit.password
    }
    const [emailUpdate, setEmailUpdate] = useState("")
    const [passwordUpdate, setpasswordUpdate] = useState("")
    const updateEmail = (event) => {
        setEmailUpdate(event.target.value)
    }
    const updatePassword = (event) => {
        setpasswordUpdate(event.target.value)
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Index</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
                {
                    listUser.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                                <td onClick={()=>editUser(index)}>Sửa</td>
                                <td onClick={()=>deleteUser(index)}>Xóa</td>
                                
                            </tr>
                        )
                    })
                }
        </table>
        <h1>Sửa thông tin</h1>
            <label htmlFor="">user name</label>
            <input type="text" id="fname" name="fname" placeholder="user name" value={infoEdit.email} onChange={updateEmail} />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" id="fname" name="fname" placeholder="password" value={infoEdit.password} onChange={updatePassword} />
            <br />
            <div className="gr-button">
                <button className="bt1" >Login</button>
                <button>Register</button>
            </div>
        </div>
    )


}

export default ListUser