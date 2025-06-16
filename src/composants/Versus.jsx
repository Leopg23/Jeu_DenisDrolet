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

                <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 131.67 113.38">
                    <path className="cls-1" d="M131.67,52.61v2.72c-1.64,3.03-1.41,5.47-4.58,7.67-8.54,5.92-21.5-1.18-17.43-11.07,1.08-2.63,3.54-2.83,4.75-4.76-6.58-1.95-14.1.23-12.52,8.39,1.76,9.02,23.85,14.98,27.34,28.96,8.62,34.6-53.08,34.79-57.28,14.59-4.64-22.29,27.6-16.99,20.9-1.38-1.21,2.81-4.12,1.98-3.85,4.76,13.87.91,15.58-7.71,5.87-16.3-10.8-9.55-26.62-14.63-21.79-33.61,5.19-20.42,53.52-22.96,58.6.03Z" />
                    <path className="cls-1" d="M.9,50.78c-.34-.46,2.57-9.46,3.28-10.93,10.49.83,20.75,1.15,31.23.05.11,1.94-.23,3.95,0,5.89,1.47,12.36,2.33,27.89,4.77,39.68,2.07,10.03,7.47,10.85,10.07.56C57.6,57,54.39,5.18,96.72.92c12.17-1.23,29.66,3.14,25.44,19.07-3.75,14.16-23.49,6.21-34.27,9.3-25.05,7.17-21.95,42.78-26.39,62.53-3.14,13.98-12.13,20.03-26.43,18.73C2.73,107.6,19.04,63.76,6.42,53c-1.73-1.48-5.33-1.99-5.51-2.22Z" />
                </svg>
            </div>
            <div className="perso 2">
                <img src={displayState == "versus" ? photo2 : perso2_base} />
            </div>
            <div className="separateur"></div>
        </div>
    )



}

export default Versus;