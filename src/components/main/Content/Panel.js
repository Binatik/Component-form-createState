// =================================================
import React from 'react';
// =================================================

// Component

function Panel({ ch, props }) {

    const { width, height, visible } = props;
    const { content, checkContent } = ch;

    return (

            !visible ?
            <div
                className='content__panel'
                style={
                    {
                        maxWidth: width,
                        minHeight: height,
                    }
                }>

                {
                    Array.isArray(content) ? content.map((ch) => checkContent(ch)) : null
                }
            </div>
            : null
    );
}

export default Panel;