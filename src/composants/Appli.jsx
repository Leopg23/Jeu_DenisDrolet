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
  const [nomPhoto1, setNomPhoto1] = useState(null);
  const [nomPhoto2, setNomPhoto2] = useState(null);
  
  const [avantPremierVs, setAvantPremierVs] = useState(true);
  const [ApresDernierVs, setApresDernierVs] = useState(false);
  const [nomPerso, setNomPerso] = useState("");

  const [anciennesphotos, setAnciennesPhotos] = useState([]);
  const [photosPresentes, setPhotosPresentes] = useState([]);
  const [nomAnciennesphotos, setNomAnciennesPhotos] = useState([]);
  const [nomPhotosPresentes, setNomPhotosPresentes] = useState([]);
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
      setNomAnciennesPhotos([]);
      setPhotosPresentes([]);
      setNomPhotosPresentes([]);
      // console.log(photoRestantes.length);
      if (photoRestantes.length >= 2) {
        // console.log("Il y a assez de photos pour choisir");
        const index1 = Math.floor(Math.random() * photoRestantes.length);

        const photo1Obj = photoRestantes.splice(index1, 1)[0];
        const p1 = { url: photo1Obj.url, name: photo1Obj.name };
    

        const index2 = Math.floor(Math.random() * photoRestantes.length);

        const photo2Obj = photoRestantes.splice(index2, 1)[0];
        const p2 = { url: photo2Obj.url, name: photo2Obj.name };

        setAnciennesPhotos(prev => [...prev, photo1]);
        setNomAnciennesPhotos(prev => [...prev, nomPhoto1]);

        setphoto1(p1.url);
        setNomPhoto1(p1.name);

        setAnciennesPhotos(prev => [...prev, photo2]);
        setNomAnciennesPhotos(prev => [...prev, nomPhoto2]);

        setphoto2(p2.url);
        setNomPhoto2(p2.name);

        setPhotosPresentes([p1.url, p2.url])
        setNomPhotosPresentes([p1.name, p2.name]);

        setAvantPremierVs(false);
      }
      else {
        setApresDernierVs(true);

        setAnciennesPhotos(prev => [...prev, photo1]);
        setNomAnciennesPhotos(prev => [...prev, nomPhoto1]);

        setphoto1(null);
        setNomPhoto1(null);

        setAnciennesPhotos(prev => [...prev, photo2]) ;
        setNomAnciennesPhotos(prev => [...prev, nomPhoto2]);

        setphoto2(null);
        setNomPhoto2(null);
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
      setNomPhoto1(nomPhotosPresentes[0]);
      setphoto2(photosPresentes[1]);
      setNomPhoto2(nomPhotosPresentes[1]);
    }
  }

  function retoursPhotos() {
    console.log("retours photo :", anciennesphotos);
    if (anciennesphotos.length == 2) {
      setACliquerRetour(true);
      console.log("walahi");
      setphoto1(anciennesphotos[0]);
      setNomPhoto1(nomAnciennesphotos[0]);

      setphoto2(anciennesphotos[1]);
      setNomPhoto2(nomAnciennesphotos[1]);
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
              nomPhoto1={nomPhoto1}
              photo2={photo2}
              nomPhoto2={nomPhoto2}
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