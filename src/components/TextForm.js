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
        var textArea = document.getElementById("MyBox");
        textArea.select();
        // textArea.setSelectionRange(0, 9999); // For mobile devices
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(textArea.value);
    }
    const HandleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
            <div className='container'>

                <h2>{props.Heading}</h2>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={HandleOnChange} id="MyBox" rows="4" style={{ color: color }}></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={HandleLwClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={Color}>Color Text</button>
                <button className="btn btn-primary mx-2" onClick={Handlecopy}>copy</button>
                <button className="btn btn-primary mx-2" onClick={HandleExtraspaces}>remove Extraspace</button>
            </div>
            <div className="container my-3">
                <h2>Your text summery</h2>
                <p>{text.split(" ").length} Words and {text.replace(/\s/g, "").length} Characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h3>preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}




