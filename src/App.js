import { useState, useRef } from "react";
//===================================
// Components -
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Song from "./components/SongDetail/SongDetail";
import Nav from "./components/Nav/Nav";
import Tracklist from "./components/Tracklist/Tracklist";
//===================================
import songData from "./songData";
import "./App.css";
//===================================

function App() {
  const audioRef = useRef();

  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [songLength, setSongLength] = useState({
    currentTime: 0,
    duration: 0,
  });

  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongLength({ ...songLength, currentTime, duration });
  };

  return (
    <div>
      <Nav libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
      <Song currentSong={currentSong} />
      <MusicPlayer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songLength={songLength}
        setSongLength={setSongLength}
        songs={songs}
        setSongs={setSongs}
      />
      <Tracklist
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryOpen={libraryOpen}
      />
      <audio
        onLoadedMetadata={updateTimeHandler}
        onTimeUpdate={updateTimeHandler}
        // onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
}

export default App;
