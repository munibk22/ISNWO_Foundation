import React, { useState, useEffect, useRef } from 'react';
import './login.css';
import fetchRequest from './fetchRequest';

export const LoginModule = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalBg, setModalBg] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const modalClose = document.querySelector(".btn-close");
    const loginBtnref = useRef(null);

    const handleOpen = () => {
        loginBtnref.current.classList.add("modal-overlay");
        setShowModal(true)
    };
    const handleClose = () => {
        setShowModal(false);
        loginBtnref.current.classList.remove("modal-overlay");
    };
    const url2 = "http://localhost:8080/user/login"

    useEffect(() => {

        return () => {
        }
    }, []);

    async function handleLogin(e) {
        e.preventDefault();
        // console.log("Client intitiated Login");
        console.log('Username:', username);
        console.log('Password:', password);

        try {
            //    let data = await <Fetch username={username} password={password} />
            let data = await fetchRequest(username, password, 'user/login');
            // const response = await axios.get(url2);
            //    if (response.status === 200) {
            //        console.log("User successfully loggin in");
            //        setShowModal(false);
            //     }
        } catch (error) {
            console.log("User cound not log in " + error);

        }
    };

    const openRegistration = (e) => {
        e.preventDefault();
        handleClose();
        // window.location.href = "/registration";
    }

    return (
        < >
            <div ref={loginBtnref} className="modalBtn flex alignitems login-btn"
                onClick={handleOpen}>
                <img type="button" src="
                https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png
                " alt="login pointer"
                    style={{ width: "26px", height: '25px', marginBottom: "3px" }}>
                </img>
                <span className="" style={{ color: "whitesmoke", marginLeft: "5px" }}>
                    User Login
                </span>
            </div>


            {showModal && (
                <div className="modal drop-shadow-filter ">
                    <button className="btn-close " onClick={handleClose}>&times;</button>
                    <div className="font500 textalign text-shadow">
                        <h2 className="r">
                            ISNWO Foundation CORP</h2>
                        <p style={{
                            color: "rgb(151, 212, 81)"
                        }}>Your Trusted Invesment Partner 💵</p>

                        {/* <div className="">
                <h5>St. Louis, MO 63141</h5>
                <a href="tel:6368754054" className="tel" >Call us at 636-875-4055 </a>
            </div> */}
                    </div>
                    <h2>Login</h2>

                    <input type="text"
                        placeholder="Username.."
                        value={username}
                        onChange={e => setUsername(e.target.value)} />

                    <input type="password"
                        placeholder="Password.."
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button className='modal-submit-button' onClick={handleLogin}>Login</button>
                    <button className='modal-close-btn' onClick={handleClose}>Cancel</button>
                    <section type='button' className='open-registration' onClick={openRegistration}>Need to register?</section>
                </div>
            )}
        </ >
    )
}
