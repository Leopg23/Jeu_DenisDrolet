import './ChoisirImg.scss';

function ChoisirImg({gererPhotos, photo1, photo2}) {

  return (
    <div className='ChoisirImg'>
        <h1>Bienvenue dans l'application</h1>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={gererPhotos}
            />
            {/* {photo && <img src={photo} alt="" />} */}
    </div>
  )
}

export default ChoisirImg;