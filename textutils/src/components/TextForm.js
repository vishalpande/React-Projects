import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick=()=>{
console.log("Uppercase was clicked " + text );
const newText=text.toUpperCase();
setText(newText);

}
const handleOnChange=(event)=>{
console.log("OnChange was clicked");
setText(event.target.value)



}

const [text,setText]=useState('Enter text here');
// setText('hello') ;

  return (
 <>
 <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholderid="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
</>

  )
}
