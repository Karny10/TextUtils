import React, {useState} from 'react'


export default function Textform(props) {
  const [text, setText] = useState('');
  
    

  

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const handleUpClick = () => {

        let newText = text.toUpperCase()

        setText(newText)
        props.Alertfunc('Text converted to UpperCase.', 'success');

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.Alertfunc("Text converted to LowerCase", "success");
    }

    const handletoClip = () => {
    
        navigator.clipboard.writeText(text );
        props.Alertfunc("Text copied to clipboard.", "success");
    }

    const handleClearText = () => {
        setText("");
       props.Alertfunc("Text cleared.","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.Alertfunc("Extra Spaces has been Removed.","success");
    }


    return (
        <>
            <div className="container mb-2">

                <h4 style={{color:props.mode==="Light"?"Black":"#adb5bd"}}>{
                    props.textArea 
                }</h4>

                <textarea className="form-control my-1 " style={{backgroundColor:props.mode==="Dark"?"#adb5bd":"White"}}id="myBox" rows="7"
                    value={text}
                    onChange={handleOnChange}></textarea>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" type="button"
                    onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" type="button"
                    onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" type="button" onClick ={handletoClip}>Copy to ClipBoard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" type="button"
                    onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" type="button"
                    onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container'>
                <h4 style={{color:props.mode==="Light"?"Black":"#adb5bd"}}>
                    Your text Summary
                </h4>
                <p style={{color:props.mode==="Light"?"Black":"#adb5bd"}}> {
                    text.split(/\s+/).filter((element)=>{return element.length!==0}).length
                } words and {
                    text.length
                } characters
                </p>
                <p style={{color:props.mode==="Light"?"Black":"#adb5bd"}}>
                    Avg time to read the text is {
                       0.04 * text.split(" ").filter((element)=>{return element.length!==0}).length
                    } minutes
                </p>
                <h4 className='my-3' style={{color:props.mode==="Light"?"Black":"#adb5bd"}} >Preview</h4>     
                <p style={{color:props.mode==="Light"?"Black":"#adb5bd"}}>
                  {text.length>0?text:"Enter Something to preview"}
                </p>


            </div>

        </>
    )
}
