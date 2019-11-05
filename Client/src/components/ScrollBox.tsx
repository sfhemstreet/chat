import React from 'react';
import '../styles/chat.scss';

interface ScrollBoxProps {
    maxHeight: number
}

const ScrollBox: React.FunctionComponent<ScrollBoxProps> = (props) => {
    return (
        <div className="scrollbox" style={{overflowY: 'scroll', maxHeight: `${props.maxHeight}px`, height: `${props.maxHeight}px`}}>
            {props.children}
        </div>
    )
}

export default ScrollBox;