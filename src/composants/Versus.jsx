import './Versus.scss';
import React, { useState } from 'react';
import vs from '/images/vs.png';
function Versus({ photo, setphoto, gererPhotos, photoUrls, choisirPhotos, photoHazard, photo1, photo2, avantPremierVs, ApresDernierVs }) {

    const [displayState, setDisplayState] = useState(null);

    if (photo1 && photo2) {
        setDisplayState('versus');
    }
    else if (avantPremierVs) {
        setDisplayState('avantPremierVs');
    } else if (ApresDernierVs) {
        setDisplayState('ApresDernierVs');
    } else {
        setDisplayState(null);
    }

    switch (displayState) {
        case 'versus':
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
                            <img src={vs} />
                        </div>
                        <div className="perso 2">
                            <img src={photo2} />
                        </div>
                        <div className="separateur"></div>
                    </div>
            )
        case 'avantPremierVs':
            return (
                <div className='Versus'>
                    <h1>Veuillez choisir au moins deux images </h1>
                </div>
            );

        case 'ApresDernierVs':
            return (
                <div className='Versus'>
                    <h1>Il n'y a plus de photos à comparer</h1>
                </div>
            );
        default:
            return (
                <div className='Versus'>
                    <h1>Bienvenue dans l'application</h1>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={gererPhotos}
                    />
                </div>
            );
    }


}

export default Versus;