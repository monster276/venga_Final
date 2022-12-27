import React from 'react';
import "./Wrapper.css"
const Wrapper = () => {
    const data = [
    {
      cover: <i class="fas fa-truck"></i>,
      title: "Vận chuyển tức thì",
      decs: "Hệ thống kho vận trải dài, đảm bảo đơn hàng đến tay bạn nhanh nhất.",
    },
    {
      cover: <i class="fas fa-id-card-alt"></i>,
      title: "Thanh toán dễ dàng",
      decs: "Đa dạng phương thức, dễ dàng",
    },
    {
      cover: <i class="fas fa-shield-alt"></i>,
      title: "Nguồn gốc rõ ràng",
      decs: "Bảo vệ quyền lợi của người mua hàng với các sản phẩm rõ nguồn gốc",
    },
    {
      cover: <i class="fas fa-headset"></i>,
      title: "Hỗ trợ 24/7 ",
      decs: "Tổng đài hỗ trợ luôn giải đáp các thắc mắc",
    },
  ]
    return (
        <div  className='wrapper background'>
            <div className="container grid2">
                {data.map((value, index) => {
                    return (
                        <div key={index} className="product">
                            <div className="img icon-circle">
                                <i>{value.cover}</i>
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.decs}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Wrapper;