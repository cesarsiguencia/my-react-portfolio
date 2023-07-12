import React, {useState, useRef, useEffect} from 'react'

import image from '../media/me/IMG_2178-copy.png'

import bike from '../media/icons/cycling-bicycle.gif'

import spanish from '../media/icons/spanish.png'

import sparrow from '../media/icons/sparrow.gif'

import QuoteCarousel from '../Components/Carousels/qoutes'

import FactsCarousel from '../Components/Carousels/facts'


const About = () => {

    const myRef = useRef()

    useEffect(()=>{
        const gifsDiv = document.querySelector('.aboutme--gifs')
        
        if(gifsDiv){
            let entry
            const observer = new IntersectionObserver((entries)=>{
            entry = entries[0];
            console.log(entry)

            const gifs = document.querySelectorAll('.gifs')

            if(gifs){
                gifs.forEach((gif)=> {
                    if(entry.isIntersecting === true){
                        gif.style.scale = '1'
                    } else {
                        gif.style.scale= '0.2'
                    }   
                })
            }
          })
          observer.observe(myRef.current)
        }
      },[])

    
    return (
        <div className="body-divs">

            <h3>About Me</h3>


            <div className="aboutme">

                <div className="aboutme-blocks">
                    <img className="profile" src={image} width="100%" />
                </div>

                <div className="aboutme-blocks">
                    <p className="body-texts"> Greetings! My name is César (pronunced Say-sar) and I am a full stack web developer with a focus on developing productivity and social media applications. I completed a coding bootcamp with Columbia University and received my certification in 2022. You can find me practicing and learning about new web development technologies consistently, which is reflected on my most recent projects shown in my portfolio and on my GitHub.
                    </p>
                    <br />

                    <p className="body-texts bold-and-left">Some of the current projects I am working on include the following: </p>
                    <br />
                    <br />
                    <p className="body-texts bold-and-left">1 - </p><p className="body-texts" style={{ display: 'inline' }}>
                        A sign up application for a special event I will be hosting in the fall of 2023 for when I turn exactly 10,000 days old!
                    </p>
                    <br />
                    <br />
                    <p className="body-texts bold-and-left">2 - </p><p className="body-texts" style={{ display: 'inline' }}>
                        A gallery website on my favorite spots in my neighborhood Washington Heights, which is iconic in the musical 'In The Heights'.
                    </p>
                    <br />
                    <br />
                    <p className="body-texts bold-and-left">3 - </p><p className='body-texts' style={{ display: 'inline' }}>
                        A MERN application promoting a new side business as an Apple product fixer, where I will showcase various projects on broken devices I have fixed, including iPods, iPhones, and Apple monitors. I will include a form for anyone to contact me and give me details about the service they wish to receive on their device.

                    </p>
                </div>
            </div>

            <div className="aboutme">
                <div className="aboutme-blocks">
                    <div className="aboutme--titles">
                        <h3>
                            My Favorite Quotes
                        </h3>
                    </div>
                    <div className="aboutme--carousel">
                        <QuoteCarousel></QuoteCarousel>
                    </div>
                </div>

                <div className="aboutme-blocks">
                    <div className="aboutme--titles">
                        <h3>
                            Fun and Random Facts
                        </h3>
                    </div>
                    <div className="aboutme--carousel">
                        <FactsCarousel></FactsCarousel>
                    </div>
                </div>
            </div>


            <div className="aboutme">
                <div className="aboutme-blocks">


                    <p className="body-texts bold-and-left">So why did I choose coding?</p>

                    <p className="body-texts">
                        When coding, there are undoubtly many challenges, especially when one implements technologies still very foreign to them. But I never get tired of the feel-good/satisfying instant moment I get when something works the way I intended after debugging for some time! It's a simple, yet proud feeling that any developer I'm sure will understand.
                        <br />
                        <br />
                        I have always been curious to see how and why something works. Because of this inquisitive nature, I am able to be persistent, so I know that my success in any developer challenge will be inevitable. This is the fulfillment building applications gives me and why challenges fuel these passions even more. </p>
                    <br />
                    <br />
                    <p className="body-texts bold-and-left">Work and Hobbies</p>

                    <p className="body-texts">
                        For almost five years, I've worked at an East Harlem elementary school in operations. On my own time, you can find me weight training, running, cycling, cooking with loved ones, or relaxing at uptown parks birdwatching and sightseeing. I identify as Latino and speak Spanish and English fluently. I can read and speak Chinese at an intermediate level from courses I took in high school, college, and a summer study abroad. </p>

                    <div className="aboutme--gifs" ref={myRef} >

                        
                        <img className="gifs" src={bike}>
                        </img>
                        <img className="gifs" src={spanish}>
                        </img>
                        <img className="gifs" src={sparrow}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About