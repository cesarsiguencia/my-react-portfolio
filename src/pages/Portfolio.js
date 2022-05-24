import React, { useState } from 'react'

import Apps from '../Components/Apps/Apps'

const Portfolio = () => {
    const [projects] = useState([
        {
          name: 'Dine-N-Wine',

        },
        { name: 'Organizer' },
        { name: 'food', description: 'Delicious delicacies' },
        { name: 'Hello' },
      ]);

      const [app, setApp] = useState(projects[0]);

    //   const element = document.getElementsByTagName("h3")
    //   console.log(element[0].innerHTML)
    //   const sectionName = element[0].innerHTML

    //   const navBar = document.getElementsByTagName("h2")
    //   console.log(navBar)
    //   for(let i = 0;i < navBar; i++){
    //       console.log(navBar[i].innerHTML)
    //   }
      

    //   console.log(tabName)
    
    //   const hello = e.target.id
    //   console.log(hello)

    // function selectedNav(e){
    //     if(e.target.id === tabName){
    //         console.log('Hi')
    //     }
    
    // }
    // selectedNav()


    return(
        <div className="body-divs">
            <h3>Portfolio</h3>

            <Apps app={app} setApp={setApp} ></Apps>
        </div>
    )
}

export default Portfolio