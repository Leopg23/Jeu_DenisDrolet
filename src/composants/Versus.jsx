import './Versus.scss';
import React, { useState } from 'react';
import vs from '/images/vs.png';
function Versus({photo, setphoto, gererPhotos, photoUrls, choisirPhotos, photoHazard, photo1, photo2, avantPremierVs}) {

    // Ensure photoUrls is an array and has at least two photos
    
    return (
        (!photo1 || !photo2) && !avantPremierVs ? (
            <div className='Versus'>
                <h1>Veuillez choisir au moins deux images </h1>
            </div>
        ) :
        
        <div className='Versus'>
            <div className="separateur"></div>
            <div className="perso 1">
                <img src={photo1} />
            </div>
            <div className="vs">
                <img src={vs}/>
            </div>
            <div className="perso 2">
                <img src={photo2}  />
            </div>
            <div className="separateur"></div>
        </div>
    )
}

export default Versus;