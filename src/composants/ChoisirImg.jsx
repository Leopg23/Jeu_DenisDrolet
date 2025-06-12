import './ChoisirImg.scss';
import btnAlbums from '/images/albums.png'
function ChoisirImg({gererPhotos, photo1, photo2}) {

  return (
    <div className='ChoisirImg'>
        <h1>Choisisez vos Combattants </h1>
           <div className="btnAlbum">
                   <input
                     type="file"
                     accept="image/*"
                     multiple
                     onChange={gererPhotos}
                     className="inputAlbums"
                   />
                   <div className="custom-file-button"
                   >
                     <img src={btnAlbums} />
                   </div>
                 </div>
            
    </div>
  )
}

export default ChoisirImg;