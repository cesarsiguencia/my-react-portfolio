import React from 'react'
import bike from '../../media/icons/gifs/cycling-bicycle.gif'
import spanish from '../../media/icons/spanish.png'
import sparrow from '../../media/icons/gifs/sparrow.gif'

const Gifs = () => {

    const gifs = [
        {
            name: 'bike',
            url: bike
        },
        {
            name: 'spanish',
            url: spanish
        },
        {
            name: 'sparrow',
            url: sparrow
        }
    ]

    return(
        <div className="aboutme-gifs-block">
            { gifs.map((gif)=>{
                return <img className="gifs" alt={gif.name} src={gif.url} key={gif.name}>
                </img>
            })
                    
            }
        </div>
    )

            
}

export default Gifs