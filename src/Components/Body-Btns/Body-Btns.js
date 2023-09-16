import React from "react";
import { HashLink } from 'react-router-hash-link'

const homeBtn = ({toPage}) => {

    
    return (
        <HashLink to={`/my-react-portfolio/${toPage.url}`}>
            <div className={`home-btns ${toPage.extend && 'extend-btns'}`}
            
            
            
            style={{color: 'black'}}>
                <p className="h5">{toPage.font}</p>
            </div>
        </HashLink>

    )
}

export default homeBtn