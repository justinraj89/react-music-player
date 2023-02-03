import { useState, useRef } from "react";
//===================================
// Components -
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Song from "./components/Song/Song";
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

  return (
    <div>
      <Song currentSong={currentSong}/>
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
    </div>
  );
}

export default App;
