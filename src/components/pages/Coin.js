import React from 'react'


export default function Coin({ coin }) {
    return (
        <div className="flex justifyaround alignitems ">


            <img className="coinimg marginright1" src={coin.image} alt='' />
            <div className="">
                {coin.name}
            </div>

            <div className="flex">
                &nbsp;Price:
                <div className="" style={{ marginLeft: '3%', width: '75px', color: "#97d451" }}>
                    {coin.current_price}
                </div>

            </div>

            <div className="">
                {/* {coin.price_change_24h} */}
            </div>
        </div>
    )
}
