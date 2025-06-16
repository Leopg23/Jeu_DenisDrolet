import './Commandes.scss';
import btnRetrours from '/images/retour.png'
import btnBataille from '/images/bataille.png'
import btnAlbums from '/images/albums.png'
function Commandes({ photo, setphoto, gererPhotos, photoUrls, choisirPhotos, photoHazard, avantPremierVs, setAvantPremierVs, retoursPhotos, photo1, nomPhoto1, photo2, nomPhoto2 }) {

  return (
    <div className='Commandes'>
      <div className="btnRetour"
        onClick={() => {
          retoursPhotos();
          avantPremierVs ?
            console.log("avantPremierVs est déjà true") :
            console.log("avantPremierVs mis à false");
        }}
      >
        <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 55.39 54.35">\
          <path className="cls-1" d="M19.6.47c1.1.9,1.21,2.37.45,3.21-6.83,8.21-7.12,8.53-9.87,11.83-.16.2-.03.5.23.5h29.81c20.5,0,19.46,38.33,1.5,38.33H2.99v-6.01h36.47c12.93,0,12.8-25.56,1.5-25.56H10.4c-.26,0-.4.3-.23.49l10.19,12.33c.93,1.26.66,2.6-.27,3.4-1,.85-2.39.86-3.53-.27,0,0-15.73-17.36-15.82-17.45-.91-.98-1.05-2.45,0-3.76C4.3,13.09,12.24,4.83,16.05.74c.64-.68,2.52-1.11,3.55-.26Z" />
        </svg>
      </div>
      <div className="nomPerso">
        <h1>{nomPhoto1}</h1>
      </div>

      <div className="btnBataille"
        onClick={() => choisirPhotos()}
      >


        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.71 89.71">
          <circle className="cls-3" cx="44.85" cy="44.85" r="44.85" />
          <g>
            <path className="cls-4" d="M70.55,19.16c-1.6-.34-2.07.88-3.05,1.74-11.17,9.83-21.16,22.16-32.23,32.23l-3.92-3.05L65.76,14.8c7.62-.63,9.9-.14,9.15,8.28l-35.28,35.28-3.05-3.92c10.07-11.07,22.4-21.06,32.23-32.23.86-.98,2.08-1.44,1.74-3.05Z" />
            <path className="cls-5" d="M19.16,19.16c-.34,1.6.88,2.07,1.74,3.05,5.32,6.04,11.97,11.43,17.42,17.42l-3.92,3.92L14.8,23.95c.38-2.25-.53-5.88,0-7.84.58-2.15,6.35-1.07,8.28-1.31l19.6,19.6-3.05,3.92c-5.99-5.45-11.38-12.1-17.42-17.42-.98-.86-1.44-2.08-3.05-1.74Z" />
            <path className="cls-5" d="M25.69,48.77c1.69-.48,2.06.46,3.05,1.31,3.32,2.83,7.47,7.18,10.45,10.45.63.69,2.05,1.52,1.74,2.61-2.45,2.85-4.74.91-6.53-1.31h-.87c-1.23,1.93-8.79,7.84-9.15,9.15-.2.74.2,1.87,0,2.61-.33,1.21-2.72,1.64-3.92,1.31-.36-.1-4.88-4.66-5.23-5.23-.52-.85-.67-2.18-.44-3.05.48-1.76,2.96-1.04,3.92-1.31,1.33-.37,7.2-7.91,9.15-9.15v-.87c-1.45-.88-5.21-5.68-2.18-6.53Z" />
            <path className="cls-1" d="M74.03,65.32c.23.11,2.06.5.87,3.05-1.21,1.86-3.69,4.14-5.66,5.66-.85.66-1.25,1.28-2.61.87-2.31-.69-1.84-3.55-2.18-4.79-.36-1.31-7.92-7.21-9.15-9.15-1.99,1.86-3.07,4.15-6.1,3.48-.74,0-.57-1.73-.44-2.18.24-.8,10.17-10.32,11.76-11.76.69-.63,1.53-2.06,2.61-1.74,3.48,1.01-.65,5.58-2.18,6.53,1.97,1.25,7.78,8.75,9.15,9.15,1.2.34,1.47.39,2.61.87.47.2,1.11-.09,1.31,0Z" />
            <rect className="cls-2" x="46.87" y="52.72" width="5.54" height="4.31" transform="translate(-24.26 51.18) rotate(-45)" />
            <polygon className="cls-5" points="54.44 47.03 57.48 49.21 54.44 53.13 51.39 50.08 54.44 47.03" />
          </g>
        </svg>
      </div>



      <div className="nomPerso">
        <h1>{nomPhoto2}</h1>
      </div>

      <div className="btnAlbum">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={gererPhotos}
          className="inputAlbums"
          onClick={() => {
            setAvantPremierVs(true);
            avantPremierVs ?
              console.log("avantPremierVs est déjà true") :
              console.log("avantPremierVs mis à false");
          }}
        />
        <div className="custom-file-button"
        >
          <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 80.14 79.14">
            <rect className="cls-2" x="3" y="29.8" width="47.17" height="46.33" rx="3.96" ry="3.96" />
            <path className="cls-2" d="M50.16,63.02h9.26c2.18,0,3.96-1.77,3.96-3.96V20.64c0-2.18-1.78-3.95-3.96-3.95H20.17c-2.19,0-3.96,1.77-3.96,3.95v9.16" />
            <path className="cls-2" d="M29.98,16.69V6.96c0-2.19,1.77-3.96,3.96-3.96h39.25c2.18,0,3.95,1.77,3.95,3.96v38.42c0,2.18-1.77,3.96-3.95,3.96h-9.81" />
            <circle className="cls-1" cx="26.17" cy="47.64" r="7.29" />
            <path className="cls-1" d="M39.5,66.08v2.6H12.84v-2.14c.1-.36.25-.71.45-1.05,1.77-3.16,6.9-5.44,12.96-5.44s11.19,2.28,12.97,5.44c.11.19.2.38.28.58Z" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Commandes;