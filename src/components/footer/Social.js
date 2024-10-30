import React from 'react'

export default function Social() {
    return (
        <div className=" flex justify social-grp" >
            <script src="https://kit.fontawesome.com/494ce4ee7f.js" crossorigin="anonymous"></script>

                <div className="socialbackground justify alignitems " >
                    <a href="/" style={{}} className=" "> <i class="fab fa-facebook-square   social"></i>
                    </a>

                </div>

                <div className="socialbackground justify alignitems " >
                    <a href="/" > <i class="fab fa-twitter-square social"></i></a>

                </div>
                <div className="socialbackground justify alignitems " >
                    <a href="/" ><i class="fab fa-instagram social"></i></a>

                </div>
                <div className="socialbackground justify alignitems " >
                    <a href="/" > <i class="fas fa-envelope social">  </i> </a>
                </div>
                {/* <li>
                    <a href="#" class="social-link">
                        <ion-icon name="logo-pinterest" role="img" class="md hydrated" aria-label="logo pinterest"></ion-icon>
                    </a>
                </li> */}

        </div>
    )
}
