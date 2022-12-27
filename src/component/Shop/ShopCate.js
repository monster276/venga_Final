import React from 'react';

const ShopCate = () => {
    const data = [
    {
      cateImg: "./images/brand/1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/brand/2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/brand/3.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/brand/4.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/brand/5.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/brand/6.png",
      cateName: "Sony",
    },
    {
      cateImg: "./images/brand/7.png",
      cateName: "Xiaomi",
    },
  ]
    return (
        <div className='category'>
            <div className="chead d_flex">
                <h1>Brands</h1>
                <h1>Shop</h1>
            </div>
            {data.map((value, index) => {
                return (
                    <div key={index} className="box f_flex">
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
            <div className="box box2">
                <button>View All Brands</button>
            </div>
        </div>
    );
};

export default ShopCate;