import React from "react";

function Slide({content}) {
    if (content.message) {
        return (
            <>
                <div className="slide">
                    <span><p>{content.message}</p></span>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                {
                    content.map(c => {
                        return (
                        <div className="slide">
                            <span dangerouslySetInnerHTML={{ __html: c.body[0].value }}/>
                        </div>)
                    })
                }
            </>
        );
    }
}

export default Slide;
