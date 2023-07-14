import React, {useRef, useEffect} from 'react'
// import general_resume from './Cesar_Siguencia-Resume-General.pdf'
import developer_resume from './Cesar_Siguencia-Resume-Developer.pdf'
import Icons from '../Components/Tech-Icons/Tech-Icons'
import document_image from '../media/icons/document.png'
import image from './resume.png'
import ClickableIcons from '../Components/Click-Icons/Click-Icons'



const Resume = () => {
    const myRef = useRef()

    useEffect(()=>{
        const gifsDiv = document.querySelector('.skills--lists')
        
        if(gifsDiv){
            let entry
            const observer = new IntersectionObserver((entries)=>{
            entry = entries[0];

            const gifs = document.querySelectorAll('.technologies-logos')
            const icon = document.querySelector('.logos-icons')

            if(gifs){
                gifs.forEach((gif)=> {
                    if(entry.isIntersecting === true){
                        gif.style.scale = '1'
                        icon.style.scale = '1'
                    } else {
                        gif.style.scale= '0.2'
                        icon.style.scale = '0.2'
                    }   
                })
            }
          })
          observer.observe(myRef.current)
        }
      },[])

    return(
        <div className="body-divs">
            <div className="skills" ref={myRef}>
                <div className="skills-blocks"> 
                    <h3>Resume</h3>
                    <p className="body-texts">Click on the document icon to download the PDF version.</p>

                    {/* <br/>
                    <p className="body-texts">Click on appropriate resume title to download the PDF version.</p>
                    <br/>
                    <a href={general_resume} download><h5>General Resume</h5></a>
                    <br/> */}

                    <ClickableIcons></ClickableIcons>
{/*                    
                    <a href={developer_resume} download>
                        <img className='logos-icons logos-contactpg' src={document_image}>
                        </img>
                    </a> 
                    <br/> */}


                    <p className="body-texts bold-and-left">Languages</p>
                    <p className="body-texts">Fluent in Spanish, Intermediate literacy in Mandarin Chinese.</p>
                    <br/>
                    
                    <img className="resume-style" src={image} width="75%"/>
                    <br/>
          
                </div>
                
                <div className="skills-blocks" >
                    <h3>Web Development Skills</h3>

                    <div className="skills--lists" >
                        <Icons></Icons>
                    </div>

                </div>
            </div>
      
           
        </div>

        
    )
}

export default Resume