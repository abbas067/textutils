import React,{useState} from 'react'

function TextForm(props) {
const[text,setText]=useState("");
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
}
const handleOnChange=(event)=>{
    setText(event.target.value)
}
const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)

}
const handleCapsClick=()=>{
    let newText=text.charAt(0).toUpperCase()+text.slice(1).toLowerCase()
    setText(newText)
}
const handleClearClick=()=>{
    let newText=''
    setText(newText)
}
  return (
    <>
<div className="container">
<h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleCapsClick}>Convert to capitilize case</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>


</div>
<div className="container my-3">
<h2>Your text summary</h2>
<p>Your text have {text.split(" ").filter(a=>a.trim().length>0).length} words and {text.length} words</p>
<p>{0.008*text.split(" ").filter(a=>a.trim().length>0).length} minutes read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
    </>
  )
}

export default TextForm