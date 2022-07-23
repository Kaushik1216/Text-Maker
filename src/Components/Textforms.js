import React,{useState} from 'react'



export default function Textforms(props) {
  const [text,setText]=useState('');
  // text="kajaj" this we can not do //to change state
  //stateText("kaushik")//this is correct are to change state
  const handleupper =()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase","success   ");
  }
  const handlelower =()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase","success   ");
  }
   const handleclear =()=>{
    setText("");
    props.showalert("Cleared","success   ");
   }
   const handlecopy=()=>{
    var text =document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy to Clipboard","success   ");
   }

   const handlespace=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showalert("Space Removed","success   ");
   }
  const upperonchange =(event)=>{
    setText(event.target.value);
  }
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="container" >
        <div className="form-floating">
              <h1>{props.heading}</h1>
      <div className="row">
       <textarea rows={10} className="form-control"  value={text} onChange={upperonchange} style={{ backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="mybox"></textarea></div>
         <button className="btn btn-primary my-3 mx-2" onClick={handleupper}>Upper Case</button>
         <button className="btn btn-primary my-3 mx-2" onClick={handlelower}>Lower Case</button>
         <button className="btn btn-primary my-3 mx-2" onClick={handleclear}>Clear</button>
         <button className="btn btn-primary my-3 mx-2" onClick={handlecopy}>Copy</button>
         <button className="btn btn-primary my-3 mx-2" onClick={handlespace}>Romove spaces</button>
         
     </div>
    </div>
    <div className="container">
      <h1>Text Summary</h1>
      <h3>{text===""?0:(text.split(" ").length)} Words ans {text.length} wordlength</h3>
      {/* <h3>{text.split(" ").length} Words ans {text.length} wordlength</h3> */}
      <h3>{0.008 *text.split(" ").length} Minutes to read text</h3>
      <h2> Preview</h2>
      <p>{text.length>0?text:"Enter text in above textbox to preview here"}</p>
    </div>
    </div>
    </>
  )
}
