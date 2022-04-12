
import './App.css'

function App() {
  return (
   <div className='container' >
    <form>
      <label htmlFor='search' >Game Search</label>
      <input name='search' id='search'></input>
    </form>

    <div className='search-results'>
      <ul>
        <li>Mario</li>
        <li>zelda</li>
        <li>Mario-card</li>
      </ul>
    </div>
   </div>
  );
}

export default App;
