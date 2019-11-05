import React from 'react';
import '../styles/chat.scss';

export interface AvatarProps {
    img: string,
    name: string,
}

const Avatar = ({img, name}:AvatarProps) => {
    return (
        <div className="avatar">
            <img src={img} className='img' alt='User avatar'/>
            <span className="name">{name}</span>
        </div>
    )
}

export default Avatar;