import React from 'react';
import '../styles/chat.scss';

import MessageProps from '../interfaces/MessageProps.interface';
import Avatar from './Avatar';

const Message = ({message, isUser}:MessageProps) => {
    const {body, date, author} = message;
    const {avatar, name} = author;
    return (
        <div className={isUser ? "message user" : "message"}>
            <div className='message-avatar' >
                <Avatar img={avatar} name={name}/>
            </div>
            <div className='body'>
                {body}    
            </div>
            {date && <span className='date'>{date}</span>}   
        </div>
    )    
}

export default Message;