import React,{useState} from 'react'

function TextForm(props) {
const[text,setText]=useState("enter text here");
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
}
const handleOnChange=(event)=>{
    setText(event.target.value)
}
  return (
    <>
<div className="mb-3">
<h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="3"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
</div>
    </>
  )
}

export default TextForm