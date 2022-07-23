import React,{useState} from 'react'

export default function About(props) {
  const [btnText,setBtnText]=useState("Enable dark mode");
  const [modeColor,setModeColor] = useState({
    color:"black",
    backgroundColor:"white"
  } );
  
  const toggleColor =()=>{
     if (modeColor.color ==="black"){
      setModeColor({
        color:"white",
    backgroundColor:"black"
      })
      setBtnText("Enable light mode");
     }
     else{
      setModeColor({
        color:"black",
        backgroundColor:'white'
      })
      setBtnText("Enable Dark mode");
     }
  }

  return (
    
    <>
    
    <div className="container my-5" >
          <div className="accordion" id="accordionExample" style={modeColor}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={modeColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" style={modeColor} aria-labelledby="headingOne"  data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we set to modeColor each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>    
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"style={modeColor}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" style={modeColor}  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={modeColor} >
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we set to modeColor each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={modeColor} >
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={modeColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={modeColor}  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={modeColor} >
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we set to modeColor each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        
      </div><button className="btn btn-primary my-3"  onClick={toggleColor}>{btnText}</button>
      </div>
</>
  )
}
