import './App.css'
import {useState} from 'react'

function App() {
  const HandleInputChange = (ev) => {
    ev.preventDefault();
    const {value} = ev.target;
    if(!value) return;
     
    const Url = `https://randomuser.me/api/${value}`
    fetch(Url)
    .then(res => res.json())
    .then(console.log)
    console.log('caught event of input', ev.target.value)
  }
  
  return (
    <div className='App'>
   <div className='container' >
    <form>
      <label htmlFor='search' >Game Search</label>
      <input name='search' id='search' onChange={HandleInputChange}  ></input>
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
