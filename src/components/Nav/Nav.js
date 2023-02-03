import './Nav.css'
//===================

function Nav({libraryOpen, setLibraryOpen}) {
  return (
    <div className='nav-container'>
        <button onClick={() => setLibraryOpen(!libraryOpen)} className='tracks-btn'>Tracks</button>
    </div>
  )
}

export default Nav