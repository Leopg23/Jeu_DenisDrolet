import './Commandes.scss';
import btnRetrours from '/images/retour.png'
import btnBataille from '/images/bataille.png'
import btnAlbums from '/images/albums.png'
function Commandes({ photo, setphoto, gererPhotos, photoUrls, choisirPhotos, photoHazard }) {

  return (
    <div className='Commandes'>
      <div className="btnRetour">
        <img src={btnRetrours} />
      </div>
      <div className="nomPerso"></div>

      <div className="btnBataille"
      onClick={() => choisirPhotos()}
      >
        <img src={btnBataille} />
      </div>
        
      

      <div className="nomPerso"></div>
      <div className="btnAlbums">
        <img src={btnAlbums} />
      </div>
    </div>
  )
}

export default Commandes;