import React from 'react';

import '../styles/chat.scss';

interface SendButtonProps {
    onSend: (Event: React.SyntheticEvent) => void,
}

interface SendButtonState {
    color1: number,
    color2: number,
    hovering: boolean,
}

class SendButton extends React.Component<SendButtonProps,SendButtonState>{
    //HOVER TOO	background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(43,37,37,1) 11%, rgba(0,58,106,1) 25%, rgba(0,211,123,1) 48%, rgba(60,112,155,1) 59%, rgba(105,105,105,1) 69%, rgba(77,80,113,1) 78%, rgba(24,33,128,1) 95%, rgba(0,0,0,1) 100%);
    // FROM     background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(43,37,37,1) 11%, rgba(0,58,106,1) 25%, rgba(0,121,221,1) 48%, rgba(60,112,155,1) 59%, rgba(105,105,105,1) 69%, rgba(77,80,113,1) 78%, rgba(24,33,128,1) 95%, rgba(0,0,0,1) 100%);
    constructor(props: SendButtonProps){
        super(props);
        this.state = {
            hovering: false,
            color1: 121,
            color2: 221
        }
    }

    render(){
        return (
            <button 
                className="sendbutton" 
                style={{
                    background: 
                        `linear-gradient(0deg, rgba(0,0,0,1) 0%, 
                        rgba(43,37,37,1) 11%, rgba(0,58,106,1) 25%, 
                        rgba(0,${this.state.color1},${this.state.color2},1) 48%, 
                        rgba(60,112,155,1) 59%, rgba(105,105,105,1) 69%, 
                        rgba(77,80,113,1) 78%, rgba(24,33,128,1) 95%, 
                        rgba(0,0,0,1) 100%)`
                }   } 
                onClick={this.props.onSend}> 
                Send
            </button>
        )    
    }
}

export default SendButton;