import React, {useState} from "react";





export default function TextForm() {
    const [text, setText] = useState('')

    const handleOnChange =(event)=>{
        setText(event.target.value)
        // console.log(event.target.value)
    }
    const handleOnClick =()=>{
        // console.log("button is pressed " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnClick2 =()=>{
        // console.log("button is pressed " + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    return (
        <>
        <div className="mb-3">
        <h1 className="mt-3 mb-5">Enter the text below</h1>

        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary mt-3" type="submit" onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-danger mt-3 mx-3 " type="submit" onClick={handleOnClick2}>Convert to Lowercase</button>
    </div>
    <div>
        <h1 className="mt-3">Details</h1>
        <p> You have entered {text.length} characters and {text.split(" ").length} words</p>
    </div>
    </>
    )
}