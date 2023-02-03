import './TracklistSong.css';
//==================================

function TracklistSong({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) {

    //=== SONG SELECT FUNCTION ======
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const curSong = song;
    const songList = songs;

    const newSongs = songList.map((song) => {
      if (song.id === curSong.id) {
        return {
          ...song,
        };
      } else {
        return {
          ...song,
        };
      }
    });
    setSongs(newSongs);

    // check if user is wanting to play a song.
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  //----------------------------------------------

  return (
    <div className="tracklist-song-container">
      <img className="tracklist-cover-img" src={song.cover} alt={song.name} />
      <div className="tracklist-song-desc">
        <h3 className="tracklist-song-name">{song.name}</h3>
        <h4 className="tracklist-artist-name">{song.artist}</h4>
      </div>
    </div>
  );
}

export default TracklistSong;
