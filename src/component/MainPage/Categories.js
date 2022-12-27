import React from 'react';

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Thời trang",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Đồ điện tử",
        },
        {
            cateImg: "./images/category/cat3.png",
            cateName: "Xe cộ",
        },
        {
            cateImg: "./images/category/cat4.png",
            cateName: "Nhà cửa",
        },
        {
            cateImg: "./images/category/cat5.png",
            cateName: "Quà tặng",
        },
        {
            cateImg: "./images/category/cat6.png",
            cateName: "Âm nhạc",
        },
        {
            cateImg: "./images/category/cat7.png",
            cateName: "Sức khoẻ và Mỹ phẩm",
        },
        {
            cateImg: "./images/category/cat8.png",
            cateName: "Thú cưng",
        },
        {
            cateImg: "./images/category/cat9.png",
            cateName: "Đồ chơi trẻ em",
        },
        {
            cateImg: "./images/category/cat10.png",
            cateName: "Tạp hoá",
        },
        {
            cateImg: "./images/category/cat11.png",
            cateName: "Sách",
        },

    ]
    return (
            <div className="category">
                {data.map((value, index) => {
                    return (
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
            </div>
    );
};

export default Categories;