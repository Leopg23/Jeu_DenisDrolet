import './Appli.scss';
import React, { useEffect, useState } from 'react';
import Commandes from "./Commandes";
import Versus from './Versus';
import ChoisirImg from './ChoisirImg';

function Appli() {
  const [photo, setphoto] = useState(null);
  const [AChoisiImg, setAChoisiImg] = useState(false);
  const [photoUrls, setPhotoUrls] = useState([]); // Convert to state variable
  const [photo1, setphoto1] = useState(null);
  const [photo2, setphoto2] = useState(null);
  const [avantPremierVs, setAvantPremierVs] = useState(true);
  const [ApresDernierVs, setApresDernierVs] = useState(false);
  const [nomPerso, setNomPerso] = useState("");

  const [anciennesphotos, setAnciennesPhotos] = useState([]);
  const [photosPresentes, setPhotosPresentes] = useState([]);
  const [aCliquerRetour, setACliquerRetour] = useState(false);

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
      setPhotoUrls([])
      // Update state with all new URLs
      setPhotoUrls([...newUrls]);

      // Set the first image as the current photo
      setphoto(newUrls[0]);
      setAChoisiImg(true);
    }
    // console.log(files);

  }

  function photoHazard() {
    const randomPhotoIndex = Math.floor(Math.random() * photoUrls.length);
    const chosenPhoto = photoUrls[randomPhotoIndex];
    // Don't filter here!
    return chosenPhoto;
  }

  function choisirPhotos() {
    if (!aCliquerRetour) {
      const photoRestantes = [...photoUrls];
      setAnciennesPhotos([]);
      setPhotosPresentes([]);
      // console.log(photoRestantes.length);
      if (photoRestantes.length >= 2) {
        // console.log("Il y a assez de photos pour choisir");
        const index1 = Math.floor(Math.random() * photoRestantes.length);

        const p1 = photoRestantes.splice(index1, 1)[0].url;

        const index2 = Math.floor(Math.random() * photoRestantes.length);

        const p2 = photoRestantes.splice(index2, 1)[0].url;

        setAnciennesPhotos(prev => [...prev, photo1]);
        setphoto1(p1);

        setAnciennesPhotos(prev => [...prev, photo2]);
        setphoto2(p2);
        setPhotosPresentes([p1, p2])

        setAvantPremierVs(false);
      }
      else {
        setApresDernierVs(true);
        setAnciennesPhotos(prev => [...prev, photo1]);
        setphoto1(null);
        setAnciennesPhotos(prev => [...prev, photo2]) ;
        setphoto2(null);
      }
      setPhotoUrls(photoRestantes);
      console.log("anciennes photos =>", anciennesphotos);
      console.log(photo1, photo2)
      console.log("photosPresentes :", photosPresentes);
    }
    else {
      setACliquerRetour(false);
      console.log("photosPresentes :", photosPresentes);
      setphoto1(photosPresentes[0]);
      setphoto2(photosPresentes[1]);
    }
  }

  function retoursPhotos() {
    console.log("retours photo :", anciennesphotos);
    if (anciennesphotos.length == 2) {
      setACliquerRetour(true);
      console.log("walahi");
      setphoto1(anciennesphotos[0]);
      setphoto2(anciennesphotos[1]);
    }
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
              gererPhotos={gererPhotos}
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
              avantPremierVs={avantPremierVs}
              setAvantPremierVs={setAvantPremierVs}
              retoursPhotos={retoursPhotos}
            />
          </>
      }
    </div>
  )
}

export default Appli;