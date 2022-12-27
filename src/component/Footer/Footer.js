import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <footer>

        
        <div className='container grid2'>
            <div className="box">
                <h1>VEGAN MARKET</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit asperiores facilis repellat consequuntur dolore inventore debitis a cum, ullam obcaecati eligendi minus, dolorum in aliquam earum. Deserunt, molestiae a.</p>
                <div className="icon d_flex">
                <div className="img d_flex">
                    <i class="fab fa-google-play"></i>
                    <span>Google Play</span>
                </div>
                <div className="img d_flex">
                    <i class="fab fa-app-store-ios"></i>
                    <span>App Store</span>
                </div>        
            </div>
            </div>
            

            <div className="box">
                <h2>About us</h2>
                <ul>
                    <li>Thông tin doanh nghiệp</li>
                    <li>Dach sách đại lý</li>
                    <li>Chính sách đổi trả</li>
                    <li>Tham gia cùng Vegan</li>
                    <li>Điều khoản bảo mật</li>
                </ul>
            </div>

            <div className="box">
                <h2>Customer Care</h2>
                <ul>
                    <li>Chăm sóc khách hàng</li>
                    <li>HD mua sắm</li>
                    <li>Tra cứu đơn hàng</li>
                    <li>Nhà phân phối</li>
                    <li>Chia sẻ và cảm nhận</li>
                </ul>
            </div>
            <div className="box">
                <h2>Contact</h2>
                <ul>
                    <li> Cau Giay,Ha Noi, Viet Nam</li>
                    <li>Email: shopnow@gmail.com</li>
                    <li>Phone: 0985985985</li>

                </ul>
            </div>
            
            </div>
        </footer>
        
    );
};

export default Footer;