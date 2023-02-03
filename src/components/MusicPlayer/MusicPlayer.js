import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
//-------------------------------
import styled from "styled-components";
import "./MusicPlayer.css";
//===============================
const pointer = { cursor: "pointer" };
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
      return faPause;
    } else {
      return faPlay;
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

  // CUSTOM COMPONENT (styled-components)
  const AnimateTrack = styled.div`
    background: rgb(204, 204, 204);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(
      ${(p) =>
        Math.round((p.songLength.currentTime * 100) / p.songLength.duration) +
        "%"}
    );
    pointer-events: none;
  `;

  //==========================================================

  return (
    <div className="music-player-container">
      <div className="time-control-container">
        <p className="song-time">{getTime(songLength.currentTime || 0)}</p>
        <div className="track">
          <input
            className="slider"
            type="range"
            onChange={dragHandler}
            min={0}
            max={songLength.duration || 0}
            value={songLength.currentTime}
          />
          <AnimateTrack songLength={songLength} />
        </div>
        <p className="song-time">{getTime(songLength.duration || 0)}</p>
      </div>
      <div className="play-controls-container">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          style={pointer}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={togglePlayPauseIcon()}
          size="2x"
          style={pointer}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          style={pointer}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
