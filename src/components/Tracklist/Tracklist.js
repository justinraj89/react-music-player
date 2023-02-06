import "./Tracklist.css";
import TracklistSong from "../TracklistSong/TracklistSong";
import styled from "styled-components";
//===========================================

function Tracklist({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryOpen,
}) {
  return (
    <LibraryContainer libraryOpen={libraryOpen}>
      <h2 className="header-text">Tracks</h2>
      <div className="songs-container">
        {songs.map((song) => (
          <TracklistSong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </LibraryContainer>
  );
}

// CUSTOM COMPONENT (styled-component)
const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  background-color: black;
  user-select: none;

  transform: translateX(${(p) => (p.libraryOpen ? "0%" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.libraryOpen ? "100" : "0")};
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 9;
  }
`;

export default Tracklist;


// overflow: scroll;