import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faMoneyCheckAlt, faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';



export default function BodyHeader() {
    return (

        // <div className="flexwrap justifyaround width30 font600 ">
        <section className='body-header'>
            {/* <script src="https://kit.fontawesome.com/494ce4ee7f.js" crossorigin="anonymous"></script> */}

            <div className=" headerb flexcol alignitems" data-aos="zoom-in">
                <FontAwesomeIcon icon={faNotesMedical} size="2x" color="red" />
                Medical Aid
            </div>
            <div className="headerb flexcol alignitems" data-aos="zoom-in">
                <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" color="green" />
                Emergency Relief
            </div>

            <div className="headerb flexcol alignitems" data-aos="zoom-in">
                <FontAwesomeIcon icon={faWheatAwnCircleExclamation} size="2x" className="text-shadow2" color="blue" />
                Food Security
            </div>

        </section>
    )
}
