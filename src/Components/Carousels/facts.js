import React, {useState, useEffect } from 'react'

const FactsCarousel = () => {

    const facts = [
        {
            fact: "My favorite dish of all time is Mediterranean grilled octopus with roasted assorted baby potatoes in dashes of rosemary, pasley, garlic, and olive oil."
        },
        {
            fact: "In college, I learned through a professor that I have perfect pitch."
        },
        {
            fact: "My top three favorite books of all time are The Alchemist, The Book Thief, and The Power of Now."
        },
        {
            fact: "I enjoy taking apart and fixing bicycles and Apple products."
        },
        {
            fact: `I'm a little "old school". I like very old cars, trains, enjoy collecting old tech, vintage video games, and have a special place in my heart for tape cassetes.`
        },
        {
            fact: `And to add on to that, all my favorite music comes from the 70s, 80s, and 90s, including Rock, RnB and Hip Hop!`
        }
]

    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselInfiniteScroll = () => {
        if(currentIndex === facts.length-1){
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(() => {
        setInterval(() => {
            carouselInfiniteScroll()
        }, 12000)
    })

    return (
        <div className="carousel-container" >
            <div className='carousel--div'>
                {facts.map((item, index) => {

                    return <div className="carousel---block">

                        <p className="aboutme--quotes carousel-item" style={{transform:`translate(-${currentIndex * 100}%)`}} key={index}>{item.fact}</p>

                        </div>
                        })}
            </div>
        </div>
    )

}

export default FactsCarousel

