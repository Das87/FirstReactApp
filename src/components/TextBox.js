import React from 'react'

export default function TextBox() {
    return (
        <div className="mb-3">
            <label for="myBox" className="form-label">Example textarea</label>
            <textarea classname="form-control" id="myBox" rows="3"></textarea>
            <button className="btn btn primary">Submit</button>
        </div>
    )
}
