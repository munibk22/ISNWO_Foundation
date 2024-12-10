import React from 'react';
import './main.css'

function Main1() {
    return (<>

        <ul>
            <details>
                <summary>Sami Boraby - <em className='leader-title'>President</em></summary>
                <p>President</p>
            </details>
            <details>
                <summary>Mehmood Rashid - <em className='leader-title'>VP</em></summary>
                <p>VP</p>
            </details>
            <details>
                <summary>Sahib Hasan - <em className='leader-title'>Treasurer</em></summary>
                <p>Treasurer</p>
            </details>
            <details>
                <summary>Sherrif Hefzy - <em className='leader-title'>Secretary</em></summary>
                <p>Secretary</p>
            </details>
            <details>
                <summary>Nadeem Salem - <em className='leader-title'>Financial Advisor</em></summary>
                <p>Financial Advisor</p>
            </details>
            <details>
                <summary>Mujeeb Sheikh - <em className='leader-title'>Board Member</em></summary>
                <p>Board Member</p>
            </details>
        </ul>
    </>);
}

export default Main1;