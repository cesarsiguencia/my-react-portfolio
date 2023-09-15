import React from 'react'
import loadingGif from '../../media/icons/gifs/loading.gif'

function loadingPg() {

    return (
        <div className="loader-wrapper">
            <div style={{display: 'flex', margin: '0 auto'}} className='align-ver'>
                <img style={{display:'block', height:'300px', borderRadius:'200px'}}src={loadingGif}></img>
            </div>
        </div>
    )
}

export default loadingPg