import './Appli.scss';
import React, { useState } from 'react';
import Commandes from "./Commandes";
import Versus from './Versus';
import ChoisirImg from './ChoisirImg';
import persoBaseImage from '/images/persoBase.png';

function Appli() {
  const [photo, setphoto] = useState(null);
  const [AChoisiImg, setAChoisiImg] = useState(false);
  const [photoUrls, setPhotoUrls] = useState([]); // Convert to state variable
  const [photo1, setphoto1] = useState(null);
  const [photo2, setphoto2] = useState(null);
  const [avantPremierVs, setAvantPremierVs] = useState(true);
  const [ApresDernierVs, setApresDernierVs] = useState(false);
  const [nomPerso, setNomPerso] = useState("");
  const imgPersoBase = { image: persoBaseImage, name: "Perso Base", url: persoBaseImage };
  function gererPhotos(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Create an array to store new URLs
      const newUrls = [];

      // Process each file
      Array.from(files).forEach((file) => {
        const objectUrl = URL.createObjectURL(file);
        // Store both the URL and the file name in an object
        newUrls.push({ url: objectUrl, name: file.name });
      });

      // Update state with all new URLs
      setPhotoUrls([...photoUrls, ...newUrls]);

      // Set the first image as the current photo
      setphoto(newUrls[0]);
      setAChoisiImg(true);
    }
    // console.log(newUrls);
  }

  function photoHazard() {
    const randomPhotoIndex = Math.floor(Math.random() * photoUrls.length);
    const chosenPhoto = photoUrls[randomPhotoIndex];
    // Don't filter here!
    return chosenPhoto;
  }

  function choisirPhotos() {
    setAvantPremierVs(false);
    const photoRestantes = [...photoUrls];
    // console.log(photoRestantes.length);
    let p1 = imgPersoBase.url;
    let p2 = imgPersoBase.url;
    if (photoRestantes.length >= 2) {
      console.log("Il y a assez de photos pour choisir");
      const index1 = Math.floor(Math.random() * photoRestantes.length);
      const p1 = photoRestantes.splice(index1, 1)[0].url;

      const index2 = Math.floor(Math.random() * photoRestantes.length);
      const p2 = photoRestantes.splice(index2, 1)[0].url;


    }
    else {
      setApresDernierVs(true);
      setphoto1(null);
      setphoto2(null);
    }




    setPhotoUrls(photoRestantes);

  }

  return (
    <div className='Appli'>
      {
        !AChoisiImg ?
          // -------------------------- page de choix d'image --------------------------
          <>
            <ChoisirImg
              gererPhotos={gererPhotos}
            />
          </>
          //-------------------------- page principale --------------------------
          :
          <>
            <Versus
              photo={photo}
              photoUrls={photoUrls}
              choisirPhotos={choisirPhotos}
              photoHazard={photoHazard}
              photo1={photo1}
              photo2={photo2}
              avantPremierVs={avantPremierVs}
              ApresDernierVs={ApresDernierVs}
            />

            <Commandes
              photo={photo}
              setphoto={setphoto}
              gererPhotos={gererPhotos}
              photoUrls={photoUrls}
              choisirPhotos={choisirPhotos}
              photoHazard={photoHazard}
              photo1={photo1}
              photo2={photo2}
            />
          </>
      }
    </div>
  )
}

export default Appli;