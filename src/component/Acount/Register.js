import './Style.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [forgetPassword, setForgetPassword] = useState('')
    const getDataUser = (event) => {
        setEmail(event.target.value)
    }
    const getDataPassword = (event) => {
        setPassword(event.target.value)
    }
    const getDataForgetPassword = (event) => {
        setForgetPassword(event.target.value)
    }
    const saveDataLocal = () => {
        
        const listUser =  JSON.parse(localStorage.getItem('listUser')) || []
        const dataFind =  listUser.find(e=>e.email === email )
        if(dataFind){
            alert("Đã có người đăng kí tài khoản này với email bạn nhập")
        }
        if (password !== forgetPassword) {
            // check cho người nhớ mật khẩu vừa nhập
            alert("2 mật khẩu không trùng nhau ")
        }
        
        else {
            const dataRegister = {
                email,
                password
            }
            alert("Đăng kí thành công, hãy đăng nhập để mua sắm")
            listUser.push(dataRegister)
            localStorage.setItem('listUser', JSON.stringify(listUser));
        }
    };
  
    return (
        <>
            <div className="register">
                <div className='registerContent'>
                    <h2>Hãy đăng ký để mua sắm ngay nhé</h2>
                    <label className='inforgs' htmlFor="">user name</label>
                    <input className='inputrgs' type="email" id="fname" name="fname" placeholder="user name" value={email} onChange={getDataUser} />
                    <br />
                    <label className='inforgs' htmlFor="">Password</label>
                    <input className='inputrgs' type="password" id="fname" name="fname" placeholder="password" value={password} onChange={getDataPassword} />
                    <br />
                    <label className='inforgsmk' htmlFor=""> Xác nhận lại mật khẩu </label>
                    <input className='inputrgs' type="password" id="fname" name="fname" placeholder="password" value={forgetPassword} onChange={getDataForgetPassword} />
                    <br />
                    <br />
                    <div className="gr-buttonrgs">
                        <Link to ='/login'>
                            <button className="btnrgs">Login</button>
                        </Link>
                        <button className="btnrgs" onClick={saveDataLocal}>Register</button>
                    </div>
                </div>
            </div> 
            
        </>
    );
}

export default Register;
