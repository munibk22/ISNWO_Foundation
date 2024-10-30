import React, { useEffect, useState } from 'react';

const LoginForm = () => {
    var [modalBg, setModalBg] = useState();
    const modalClose = document.querySelector(".btn-close");

    useEffect(() => {
        setModalBg(document.getElementById("modal"));
        return () => {

        }
    }, [])



    const handleClose = (e) => {
        e.preventDefault();
        modalBg.classList.remove("bg-active");
    }
    return (
        <div className="">

            <div className="flex justifyend">

                <div className=" ">
                    <button onClick={handleClose}
                        type="button" className="btn-close modal-close" style={{ fontSize: "18px" }} aria-label="Close">X</button>
                </div>

            </div>
            <div className="flex justify">
                <h2 class="form-signin-heading">Please sign in</h2>
            </div>
            <br />
            <hr />
            <form class="form-signin flexcol alignitems" method="post" action="/login">

                <p style={{ width: "100%" }} className="justify flex" >
                    <label for="username" class="sr-only">Username</label>
                    <input type="text" id="username" name="username" className="form-control padding2 margintop10"
                        placeholder="Username" required="" autofocus=""
                        style={{ width: "inheret" }} />
                </p>
                <p style={{ width: "100%" }} className="justify flex" >
                    <label for="password" class="sr-only">Password</label>
                    <input style={{ width: "inheret" }}
                        type="password" id="password" name="password" className="form-control padding2 margintop" placeholder="Password" required="" />
                </p>
                <input name="" type="hidden" />
                <br />
                <hr />
                <div style={{ width: "100%" }} className="flex justify margintop10">
                    <button onClick={handleClose}
                        className=" modalbutton"
                        style={{}}
                        size="lg" type="submit">Sign in</button>
                </div>

                <div style={{ width: "100%" }} className="flex justifyend margintop10">
                    <button className="modalbutton" onClick={handleClose}
                        style={{ width: "30%", backgroundColor: "#dc3545" }}
                        size="lg" type="submit">Close</button>
                </div>
                <button type='button'>Need to register?</button>
            </form>

        </div>
    )
}

export default LoginForm
