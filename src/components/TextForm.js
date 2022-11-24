// for using state type{useState} in import React from 'react'
import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const lowerCase= ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const clearText= ()=>{
        let newText = ("");
        setText(newText)
        props.showAlert("Text has been cleared!", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
        
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
        
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success");
    }



    // then copy this code  const [count, setCount] = useState(0); from react website and paste here
    const [text, setText] = useState("Enter text here2");

   // text = "new text"; //wrong way to change the state
    // setText = ("new text"); //Correct way to change the state

  return (
    <>
    
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>

{/* then type this {text} jaha bhi ap isko lagana chahen */}

<h2>{props.heading}</h2>

<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={lowerCase}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>    
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>



  <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>

  <h2 className=''>Your text summary</h2>
  {/* <p>350 words and 78687 characters</p> */}
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes to read</p>
  <h3 className=''>Preview</h3>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>

</>
  )
}



