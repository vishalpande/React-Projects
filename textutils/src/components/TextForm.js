import React, { useState } from "react";

export default function TextForm(props) {
  // const clear = () => {
  //   const newText3 = text.clear();
  //   setText(newText3);
  // };

  const handleUpClick2 = () => {
    const newText2 = text.toLowerCase();
    setText(newText2);
  };

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text );
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("OnChange was clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // setText('hello') ;

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          placeholderid="myBox"
          rows="6"
        ></textarea>
      </div>
      <div className="d-grid gap-2 d-md-flex ">
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-secondary " onClick={handleUpClick2}>
          Convert to lowercase
        </button>
        {/* <button className="btn btn-danger " onClick={clear}> */}
        {/* Clear */}
        {/* </button> */}
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
      <p>{text}</p>
      </div>
     
    </>
  );
}
