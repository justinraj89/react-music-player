// MUI ICONS
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
//-------------------------------
import "./MusicPlayer.css";
//===============================

function MusicPlayer({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  songLength,
  setSongLength,
  songs,
  setSongs,
}) {

  //==== Functions
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  //--------------------------------
  const togglePlayPauseIcon = () => {
    if (isPlaying) {
      return PauseIcon;
    } else {
      return PlayArrowIcon;
    }
  };
  //---------------------------------
  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let second = ("0" + Math.floor(time % 60)).slice(-2);
    return `${minute}:${second}`;
  };
  //---------------------------------
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongLength({ ...songLength, currentTime: e.target.value });
  };
  //---------------------------------
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  //-------------------------------
  const activeLibraryHandler = (newSong) => {
    const newSongs = songs.map((song) => {
      if (song.id === newSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  //==========================================================

  return (
    <div className="music-player-container">
      <div className="time-control-container">
        <p className="song-time">{getTime(songLength.currentTime || 0)}</p>
		<div className="track">
			<input className='slider' type="text" />
		</div>
      </div>
    </div>
  );
}

export default MusicPlayer;
