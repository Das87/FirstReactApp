import React, { useState } from 'react'

export default function Textbox() {
    function convertToProperLetter(paragraph) {
        // Split the paragraph into an array of sentences
        paragraph = paragraph.toLowerCase();
        const sentences = paragraph.split(/[.!?]\s+/);

        // Initialize an empty array to store the capitalized sentences
        const properSentences = [];

        // Capitalize the first letter of each sentence
        for (const sentence of sentences) {
            if (sentence.length > 0) {
                const capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
                properSentences.push(capitalizedSentence);
            }
        }

        // Join the sentences back into a paragraph
        const properParagraph = properSentences.join('. ');

        return properParagraph;
    }


    const clickBtnUpper = () => {
        // console.log("clicked.........");
        let upper = text.toUpperCase();
        setText(upper);
    }
    const clickBtnLower = () => {
        // console.log("clicked.........");
        let lower = text.toLowerCase();
        setText(lower);
    }
    const clickBtnProper = () => {
        // console.log("clicked.........");
        let result = convertToProperLetter(text);
        setText(result);
    }


    const onUpdate = (event) => {
        // console.log("changed");
        setText(event.target.value);
        // console.log(text);
    }
    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div className="container">
                <h1><b>Example Text Area</b></h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onUpdate} id="myBox" rows="5"></textarea>
                    <button className="btn btn-primary my-2 mx-1" onClick={clickBtnUpper} type="submit">Convert to <b>UPPERCASE</b></button>
                    <button className="btn btn-success my-2 mx-1" onClick={clickBtnLower} type="submit">Convert to <b>LOWERCASE</b></button>
                    <button className="btn btn-secondary my-2 mx-1" onClick={clickBtnProper} type="submit">Convert to <b>Proper</b></button>

                </div>
            </div>

            <div className="container">
                <h3><b>Summary</b></h3>
                <div className="summary">
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                </div>
            </div>

            <div className="container">
                <h4>Preview</h4>
                <div className="preview">
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
