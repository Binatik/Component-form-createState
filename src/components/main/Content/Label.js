// =================================================
import React from 'react';
// =================================================

// Component

function Label( { props } ) {
    const { caption, visible } = props;
    return (
        !visible ?
            <span className='content__label text'>{caption}</span>
            : null
    );
}

export default Label;