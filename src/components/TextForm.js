import React,{useState} from 'react'
export default function TextForm(props) {
  
  const [text,setText]=useState('');
  const [prevText,setprevText] = useState('');
  const handleClearText = ()=>{
    // console.log("Upercase button has been clicked");
   setprevText(text);
    setText('');
    props.showAlert("TextBox has been cleared","success");
  }
  const handleUndoText = ()=>{
    // console.log("Upercase button has been clicked");
    setText(prevText);
    setprevText('');
    props.showAlert("Undo Done !","success");
  }
  const handleUpCaseClick = ()=>{
    // console.log("Upercase button has been clicked");
    setprevText(text);
    setText(text.toUpperCase());
    props.showAlert("All the text in the TextBox has been converted to upperCase letters","success");
  }
  
  const handleLowCaseClick = ()=>{
    // console.log("Upercase button has been clicked");
    setprevText(text);
    setText(text.toLowerCase());
    props.showAlert("All the text in the TextBox has been converted to lowerCase letters","success");

  }
  const handleCopy = ()=>{
    // console.log("Upercase button has been clicked");
    let t = document.getElementById("myBox")
    t.select();
    navigator.clipboard.writeText(t.value);
    props.showAlert("All the text in the TextBox has been copied to clipBoard","success");

  }
  
  const handleExtraSpaces = ()=>{
    // console.log("Upercase button has been clicked");
    setprevText(text);
    let newTex = text.split(/[ ]+/);
    setText(newTex.join(" "));
    props.showAlert("All the extra spaces hase benn removed in the TextBox","success");

  }

  const handleOnChange=(event)=>{
    console.log("changing");
    setText(event.target.value);
  }
  
  
  // text="here"  // wrong way to change the state
  
  // setText("new text"); // correct eay to change the state;
  return (
   <>
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
    <h1>{props.heading}</h1>
    <textarea className="form-control" id="myBox" rows="6" value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
      <button className="btn btn-danger my-3 mx-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-danger my-3 mx-1" style={{display : text===''?'none':'inline'}} onClick={handleUndoText}>Undo</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleUpCaseClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleLowCaseClick}>Convert to lowercase</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   </div>
   <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Some text in the textbox above to preview"}</p>
    </div>
   </>

  )
}


// online dekh ke bhut ku6 kiya ja sakta ha isme 