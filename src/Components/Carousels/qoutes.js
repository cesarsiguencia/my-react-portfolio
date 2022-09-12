import React, {useState, useEffect } from 'react'

const QuoteCarousel = () => {

    const quotes = [
        {
            quote:`"I never let my schooling interfere with my education."`,
            person: "-Mark Twain"
        },
        {
            quote: `"If you want something you've never had, you must be willing to do something you've never done."`,
            person: "-Thomas Jefferson"
        },
        {
            quote: `"I won't have a problem if you hit high and miss, but I am going to have a real problem if you aim low and hit."`, 
            person: "- Michaelangelo",
        },

        {
            quote: `"We are what you repeatedly do, excellence then, is not and act, but a habit.",
            `,
            person: "- Aristotle",
        },
        {
            quote: `"When we hit out lowest point, we are open to the greatest change."`,
            person: "-Legend of Korra Nickelodeon Series",
        },
    
]

    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselInfiniteScroll = () => {
        if(currentIndex === quotes.length-1){
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 9000)

        // return () => clearInterval(interval)
    })

    return (
        <div className="carousel-container" >   

            <div className='carousel--div'>
                { quotes.map((item, index) => {

                return <div className="carousel---block">

                    <p className="aboutme--quotes carousel-item" style={{transform:`translate(-${currentIndex * 100}%)`}} key={index}>{item.quote}</p>

                    <h5 className="carousel-item" style={{transform:`translate(-${currentIndex * 100}%)`}} key={index}>
                    {item.person}
                    </h5>

                </div>
                    })}
            </div>
        </div>
    )

}

export default QuoteCarousel