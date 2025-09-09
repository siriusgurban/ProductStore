import React, { useState } from "react";

export function Accordion({ title, content, open, onClick }) {

    return (
        <div className="accordion">
            <button className="accordion_title" onClick={onClick}>
                {title} {open ? "-" : "+"}
            </button>
            <div className="accordion_content">{open && <p>{content}</p>}</div>
        </div>
    );
}

