// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

const [note,setNote]= useState('');
const [currentNotes, setCurrentNotes]= useState([]);


const handleChange =(event)=>{
  setNote(event.target.value);
}


 const handleClick =() =>{
 setCurrentNotes([...currentNotes, note]);
 setNote("");
 }

  return (
    <div className="App">
      <h1>Note Taker</h1>
      <p>note down your new thoughts.</p>
      <div className='formHolder' >
        <div className='mb-3'>
        <label htmlFor='note' className='form-label'>Note:</label>
        <input 
         onChange={handleChange} value={note}
        type='text' className='form-control' id="note" name='note' placeholder='Enter your note here...'/>
        <br></br>
        <button type="button" onClick={handleClick} class="btn btn-outline-primary">Submit</button>

        </div>
      </div>
<div>{currentNotes.map((n)=>(<p>{n}</p>))}</div>
    </div>
    
  );
}

export default App;
