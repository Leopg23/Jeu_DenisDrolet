import './Commandes.scss';
import btnRetrours from '/images/retour.png'
import btnBataille from '/images/bataille.png'
import btnAlbums from '/images/albums.png'
function Commandes({ photo, setphoto, gererPhotos, photoUrls, choisirPhotos, photoHazard,avantPremierVs, setAvantPremierVs, retoursPhotos }) {

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
        <img src={btnRetrours} />
      </div>
      <div className="nomPerso"></div>

      <div className="btnBataille"
        onClick={() => choisirPhotos()}
      >
        <img src={btnBataille} />
      </div>



      <div className="nomPerso"></div>

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
          <img src={btnAlbums} />
        </div>
      </div>
    </div>
  )
}

export default Commandes;