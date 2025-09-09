import React, { useState } from 'react'
import { Accordion } from '../../../../components/Accordion';

const items = [
    {
        title: "What is React?",
        content: "React is a JavaScript library for building user interfaces.",
    },
    {
        title: "Why use an accordion?",
        content:
            "Accordions help present collapsible content and save vertical space on the page.",
    },
    {
        title: "Accessibility",
        content:
            "This accordion uses ARIA attributes and keyboard navigation (Arrow keys, Home, End, Enter/Space).",
    },
];

function FAQ() {

    const [open, setOpen] = useState(null);

    return (
        <div className="faq">
            <div className="container">
                <div className="row">
                    <div className='accordion_box'>
                        {items.map((item, index) => (
                            <Accordion key={index} title={item.title} content={item.content} open={open === index}
                                onClick={() =>
                                    setOpen(open === index ? null : index)
                                } />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FAQ