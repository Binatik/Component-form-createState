// =================================================
import React from 'react';
// =================================================

// Component

function Button({ propsClass, text, props, func}) {

    function checkDataButton() {
        if(props) {
            const { width, height, visible } = props;
            return  !visible ? <button
                className={propsClass}
                style={
                    {
                        maxWidth: width,
                        minHeight: height,
                    }
                }
                type='button'>{text}
            </button>
                : null
        }

        else {
            return <button
                className={propsClass}
                onClick={func}
                type='button'>{text}</button>
        }
    }
    return (
        checkDataButton()
    );
}

export default Button;