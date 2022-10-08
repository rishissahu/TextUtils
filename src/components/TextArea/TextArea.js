import React, { useState } from "react";



export default function TextForm(props) {



    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
        // console.log(event.target.value)
    }
    const handleOnClick = () => {
        // console.log("button is pressed " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnClick2 = () => {
        // console.log("button is pressed " + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    return (
        <>
            <div className="mb-3">
                <h1 className="mt-3 mb-2">Enter the text below</h1>
                <textarea className={`form-control text-${props.mode === "light" ? "black" : "white"}`} rows="10" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "#100929" }} onChange={handleOnChange}></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mt-1 mx-1" type="submit" onClick={handleOnClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-danger mt-1 mx-1 " type="submit" onClick={handleOnClick2}>Convert to Lowercase</button>
            </div>

            <div>
                <h1 className="mt-3">Details</h1>
                <p> You have entered {text.length} characters and {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words</p>
            </div>

            <div className="constiner">
                <h2>Preview</h2>
                <p>{text.length !== 0 ? text : "**Enter some text for previesw**"}</p>
            </div>
        </>
    )
}