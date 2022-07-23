import React from 'react'

export default function Alert(props) {
    const capat=(word)=>{
        let s = word.toLowercase();
        return (s[0].toUppercase()+s.slice(1).toLowercase())
    }
  return (
    //props.alert handle hide alert box when not click to window
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>{props.alert.msg}
  
</div>
   
  )
}
