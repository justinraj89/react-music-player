import './SongDetail.css'
//======================

function Song({currentSong}) {
  return (
    <div className='song-detail-container'>
        <img className='album-art' src={currentSong.cover} alt={currentSong.name} />
        <h1 className='song-name-text'>{currentSong.name}</h1>
        <h2 className='song-artist-text'>{currentSong.artist}</h2>
    </div>
  )
}

export default Song