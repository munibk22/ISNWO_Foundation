import React from 'react';
import './card.css';

function Card({img,article,cardStyle,aosStyle}) {
   
    return (
    <div className= 'card' data-aos={aosStyle}>
   
    {article ? <article style={cardStyle}>{article}</article> : null}
    {img ? img: null}
    
    </div>  );
}


export default Card;