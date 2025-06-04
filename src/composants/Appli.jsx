import './Appli.scss';
import React, { useState } from 'react';
function Appli() {
  const [photo, setphoto] = useState(null);
  function handleFiles(event) {
    const files = event.target.files;
    if (files || files.length > 0) {
      const fileReader = new FileReader();
      const objectUrl = URL.createObjectURL(files[0]);
      // fileReader.readAsDataURL(files[0]);
      setphoto(objectUrl);
    }
    
  }
  return (
    <div className='Appli'>
      <h1>Bienvenue dans l'application</h1>
       <input
        type="file"
        accept="image/*"
        // multiple
        onChange={handleFiles}
      />
      {photo && <img src={photo} alt="" />}
    </div>
    
  )
}

export default Appli;
