import React from "react";

function Slide({content}) {
    let renderContent = null;

    if (content.message) {
        renderContent = { __html: content.message };
    }
    else {
        renderContent = { __html: content[0].body[0].value };
    }
    
    return (
        <div className="slide">
            <div className="caption"><span dangerouslySetInnerHTML={renderContent} /></div>
        </div>
    );
}

export default Slide;
