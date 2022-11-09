import React,{useState} from 'react'
export default function TextForm(props) {
  
  const [text,setText]=useState('');
  const [prevText,setprevText] = useState('');
  const handleClearText = ()=>{
    if(text===''){
      props.showAlert("Nothing to clear","warning");
    }
    else{
      setprevText(text);
      setText('');
      props.showAlert("TextBox has been cleared","success");
    }
  }
  const handleUndoText = ()=>{
    setText(prevText);
    setprevText('');
    props.showAlert("Undo Done !","success");
  }
  const handleUpCaseClick = ()=>{
     
    if(text===''){
      props.showAlert("Nothing to convert","warning");
    }
    else{
      setprevText(text);
      setText(text.toUpperCase());
      props.showAlert("Converted to upperCase","success");
    }
  }
  
  const handleLowCaseClick = ()=>{
     
    if(text===''){
      props.showAlert("Nothing to convert","warning");
    }
    else{
      setprevText(text);
      setText(text.toLowerCase());
      props.showAlert("Converted to lowerCase","success");
    }

  }
  const handleCopy = ()=>{
     
    if(text===''){
      props.showAlert("Nothing to copy","warning");
    }
    else{
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipBoard","success");
    }
  }
  
  const handleExtraSpaces = ()=>{
     
    if(text===''){
      props.showAlert("Nothing to Operate","warning");
    }
    else{
      setprevText(text);
      let newTex = text.split(/[ ]+/);
      setText(newTex.join(" "));
      props.showAlert("Extra spaces Removed","success");
    }
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  return (
   <>
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
    <h1 className='mb-2'>{props.heading}</h1>
    <textarea className="form-control" id="myBox" rows="6" value={text} style={{backgroundColor : props.mode==='dark'?'#706f6f':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
      <button className="btn btn-danger my-3 mx-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-danger my-3 mx-1"  style={{display : text===''?'none':'inline'}} onClick={handleUndoText}>Undo</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleUpCaseClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleLowCaseClick}>Convert to lowercase</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   </div>
   <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
      <h2>Summary</h2>
      <p>{text.split(/\r\n|\r|\n/).filter((element)=>{return element.length!==0}).length} lines, {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Show"}</p>
    </div>
   </>

  )
}
