import React, {useState, } from 'react';
import '../styles/chat.scss';

import SendButton from './SendButton';

interface TextBoxProps {
    onSubmit: (text: string) => void,
}

const TextBox = ({onSubmit}: TextBoxProps) => {
    const [text, setText] = useState('');

    const textAreaRef = React.useRef<HTMLTextAreaElement>(null)

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    
    const onSendClearText = () => {
        if(textAreaRef && textAreaRef.current && textAreaRef.current.value){
            onSubmit(text);
            textAreaRef.current.value = '';
        }
    }

    return (
        <div>
            <div className="textbox">
                <textarea className="text" placeholder="_" onChange={handleInput} ref={textAreaRef}/>
                <div className='send'>
                    <SendButton onSend={onSendClearText} />
                </div> 
            </div> 
        </div>
        
    )
}

export default TextBox;