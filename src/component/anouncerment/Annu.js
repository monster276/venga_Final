import React from 'react';

const Annu = () => {
    const style1 = {
        width: "30%",
        height: '340px',
    }
    const style2 = {
        width: "68%",
        height: '340px',
    }
    return (
        <div className='annouc background'>
            <div className="container d_flex">
                <div className="img" style={style1}>
                    <img src="./images/banner-1.png" alt="" width='100%' height='100%' />
                </div>
                <div className="img" style={style2}>
                    <img src="./images/banner-2.png" alt="" width='100%' height='100%' />
                </div>
            </div>
        </div>
    );
};

export default Annu;