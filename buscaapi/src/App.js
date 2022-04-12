import './App.css'

function App() {
  return (
    <div className='App'>
   <div className='container' >
    <form>
      <label htmlFor='search' >Game Search</label>
      <input name='search' id='search'></input>
    </form>

    <div className='search-results'>
      <ul>
        <li> <span>Mario</span></li>
        <li> <span>zelda</span></li>
        <li><span>Mario-card</span></li>
      </ul>
    </div>
   </div>
  </div>
  );
}

export default App;
