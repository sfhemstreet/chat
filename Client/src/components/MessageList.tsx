import React from 'react';
import uuid from 'uuid';
import '../styles/chat.scss';

import Message from './Message';
import ScrollBox from './ScrollBox';

import MessageProps from '../interfaces/MessageProps.interface';

interface MessageListProps {
    messages: MessageProps[]
}

const MessageList = ({messages}:MessageListProps) => {
    // render each message, left if not user right if isUser
    const renderMessages = messages.map((m,i) => {
        const {isUser, message} = m;
        return (
            <div 
                key={`message-${i}-${uuid()}`} 
                className={i === 0 ? "message-container dropdown" : "message-container flowdown"} 
            >
                <div className={isUser ? "message-right" : "message-left"}>
                    <Message message={message} isUser={isUser} />
                </div>  
            </div>
        )
    });
    
    return (
        <div className='message-list'>
            <ScrollBox maxHeight={400}>
                {renderMessages}
            </ScrollBox>
        </div>
    )    
}

export default MessageList;