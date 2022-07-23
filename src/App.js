
import './App.css';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import About from './Components/About';
import Alert from './Components/Alert'
import React,{useState} from 'react';
import {Route,Routes} from 'react-router-dom';

function App() {
  const[mode,setMode] =useState('light');
  const[text,setText] =useState('dark');

  const[alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor="#565699";
      showalert("Dark mode enable","success  ");
    }
    else{
      setMode('light');
      setText('dark');
      document.body.style.backgroundColor="white";
      showalert("light mode enable","success  ")
    }
  }
  return (
    <>  
    <div className="App">
       <Navbar title="Text Maker" mode={mode} toggleMode={toggleMode} text={text}/>
    <Alert alert={alert}/>
    <Routes>
   
      <Route path="/" element={<Textforms heading="Enter message here" mode={mode} showalert={showalert}/>}/>
      <Route path="/about" element={ <About mode={mode}/>}/>
    </Routes>
    </div>
    {/* <Navbar title="Text Maker" mode={mode} toggleMode={toggleMode} text={text}/>
    <Alert alert={alert}/>
      <About mode={mode}/>
        <Textforms heading="Enter message here" mode={mode} showalert={showalert}/> */}
        
    </>
  );
}

export default App;
