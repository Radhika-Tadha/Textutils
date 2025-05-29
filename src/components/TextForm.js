import React, { useState } from 'react'


export default function TextForm(props) {
    const HandleUpClick = () => {
        // console.log("uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const HandleLwClick = () => {
        let Newtext = text.toLocaleLowerCase();
        setText(Newtext);
    }
    const HandleOnChange = (event) => {

        setText(event.target.value);
    }
    const ClearText = () => {
        let Clear = '';
        setText(Clear);
    }
    const Color = () => {
        setColor('red');
    }
    const [color, setColor] = useState('black');
    const [text, setText] = useState('');
    // setText("New text");


    const Handlecopy = () => {
        navigator.clipboard.writeText(text);
       props.showAlert("Copied to Clipboard!", "success");
        // document.getSelection().removeAllRanges();
    }
    const HandleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
            <div className='container'>

                <h3>{props.Heading}</h3>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={HandleOnChange} id="MyBox" rows="6" style={{ color: color }}></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleLwClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={ClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={Color}>Color Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={Handlecopy}>copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleExtraspaces}>remove Extraspace</button>
            </div>
            <div className="container my-3">
                <h2>Your text summery</h2>
                <p>{text.split(/\s+/).filter((element) => {
                    return element.length !== 0
                }).length} Words and {text.replace(/\s/g, "").length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {
                    return element.length !== 0
                }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}

