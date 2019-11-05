import React from 'react';
import '../styles/chat.scss';

import TextBox from './TextBox';
import MessageList from './MessageList';

import MessageProps from '../interfaces/MessageProps.interface';

interface ChatProps {
    onSendMessage: (message: string) => void,
    messages: MessageProps[]
}

interface ChatState {
    text: string
}

const Chat = ({onSendMessage, messages}:ChatProps) => {

    const checkInput = (message: string) => {
        return message ? true : false;
    }

    const onSubmit = (text: string) => {
        const allGood = checkInput(text);
        if(allGood){
            onSendMessage(text)
        }   
    }
   
    return (
        <div className="chat">
            <TextBox onSubmit={onSubmit}/>   
            <MessageList messages={messages} />
        </div>
    )
}

export default Chat;
