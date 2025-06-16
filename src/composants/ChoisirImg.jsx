import './ChoisirImg.scss';
import btnAlbums from '/images/albums.png'
function ChoisirImg({ gererPhotos, photo1, photo2 }) {

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

export default ChoisirImg;