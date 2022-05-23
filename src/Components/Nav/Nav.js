import React from "react";

const Nav = (props) => {
    const {
        contactSelected,
        setContactSelected
      } = props; 
    return(
        <nav className="Navigator">
            <p className={`${contactSelected}`}> <span  onClick={() => setContactSelected(true)}>About Me</span></p>
            <p>   <span
                onClick={() => {
                  setContactSelected(false);
                }}
              >Portfolio</span></p>
            {/* <p>Contact</p>
            <p>Resume</p> */}
        </nav>
    )
}

export default Nav

//className={`mx-2 ${contactSelected && 'navActive'}`}