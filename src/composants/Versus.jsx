import './Versus.scss';
import React, { useEffect, useState } from 'react';
import vs from '/images/vs.png';
import perso1_base from '/images/perso1_base.png';
import perso2_base from '/images/perso2_base.png';
function Versus({ photo, setphoto, gererPhotos, photoUrls, choisirPhotos, photoHazard, photo1, photo2, avantPremierVs, ApresDernierVs }) {

    const [displayState, setDisplayState] = useState(null);

    useEffect(() => {
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
    }, [photo1, photo2, avantPremierVs, ApresDernierVs]);


    return (

                <div className='Versus'>
                    <div className="separateur"></div>
                    <div className="perso 1">
                        <img 
                            src={displayState == "versus" ? photo1 : perso1_base}
                        />
                    </div>
                    <div className="vs">
                        <img src={vs} />
                    </div>
                    <div className="perso 2">
                        <img src={displayState == "versus" ? photo2 : perso2_base} />
                    </div>
                    <div className="separateur"></div>
                </div>
            )
    


}

export default Versus;