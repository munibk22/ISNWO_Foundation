import React from 'react'
import './search.css'


export default function Search() {
    return (
        <div className=" flex justifyend alignitems " >
            <input className="relative search-bar " type='text' value=''
                style={{}}>

            </input>
            <div className="absolute">
                <button type='submit' className='search-button   '
                    style={{ textAlign: 'center', margin: "0" }}>Search </button>

            </div>


        </div>
    )
}
