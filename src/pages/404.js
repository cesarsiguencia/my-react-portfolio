import React from "react";
import BodyBtn from '../Components/Body-Btns/Body-Btns'

const div404 = ({goHome}) => {
    return(
        <div className="header-hero">
            <div className="header-text">
                <h1><strong className="red-font">404</strong> | Page not found</h1>
                <p className="header-slogan">The link may be broken or does not exist.</p>
                <br/>
                <BodyBtn toPage={goHome}></BodyBtn>
            </div>

            
        </div>
    )
}

export default div404