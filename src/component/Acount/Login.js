
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
function Login() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const getDataUser = (event) => {
          setEmail(event.target.value)
      }
      const getDataPassword = (event) => {
          setPassword(event.target.value)
      }
      const login = ()=>{
        const listUser =  JSON.parse(localStorage.getItem('listUser')) || []
        const dataFind = listUser.find(e=> e.email === email && e.password === password)
          if (dataFind) {
            alert("Đăng nhập thành công, quay lại trang chủ để mua sắm")

        }else {
            alert("Tài khoản bị sai hoặc không tồn tại ")
        }
      }
    return (
        <div className='login'>
            <div className="loginContent">
                <h2>Đăng nhập nếu bạn đã có tài khoản</h2>
                <label className='info' htmlFor="">User name</label>
                <input className='input' type="text" id="fname" name="fname" placeholder="user name" value={email} onChange={getDataUser} />
                <br />
                <label className='info' htmlFor="">Password</label>
                <input className='input' type="password" id="fname" name="fname" placeholder="password" value={password} onChange={getDataPassword} />
                <br />
                <div className="gr-button">
                    <button className="btn" onClick={login}>Login</button>
                    <Link to ='/register'>
                        <button className="btn">Register</button>
                    </Link>
                </div>
            </div> 
        </div>
    );
}

export default Login;
