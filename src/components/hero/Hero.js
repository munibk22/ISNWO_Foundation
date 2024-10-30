import React from 'react';
// import background from '../assests/catgirl2.png';
import './hero.css';



function Hero({text,className,anchor,img}) {   
  return (<> 
  {text ? text :
    <div style={{fontFamily:'"Poetsen One"'}}
    className={className}>
    </div>}
      {img ? img : null}
      
    </>
  );
}

export default Hero;
