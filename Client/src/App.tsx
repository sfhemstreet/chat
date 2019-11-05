import React from 'react';

import './App.css';

import Chat from './components/Chat';
import MessageProps from './interfaces/MessageProps.interface';
import TextBox from './components/TextBox';
import Avatar from './components/Avatar';


function user(message: string){
    return {
        message: {
            author: {
                name: "BatDog",
                avatar: "https://ih1.redbubble.net/image.613438749.5570/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg"
            },
            body: message,
            date: "17:52 Oct 30 '19",    
        },
        isUser: false
    }
}

interface Messages{
    messages:MessageProps[],
    name: string,
    avatar: string
}

interface Message{
    
    author: {
        name: string,
        avatar: string
    }
    body: string,
    date: string
    
}



class App extends React.Component<any,Messages>{
    ws: WebSocket = new WebSocket('ws://localhost:9001')
    
    constructor(props: any){
        super(props);
        this.state = {
            messages: [],
            name: "",
            avatar: ""
        }
        
    }

    componentDidMount(){
        this.ws.onopen = () => {
            console.log('Connected');
        }

        this.ws.onmessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data)
        
            console.log('message rec',message);

            const newMessage = this.constructChatMessage(message)

            const m = this.state.messages;
            m.unshift(newMessage);
            this.setState({messages : m});
        }

    }

    sendMsg = (message: string) => {
        const m = this.makeMessage(message);
        this.ws.send(JSON.stringify(m))
    }

    constructChatMessage = (message: Message) => {
        return {
            message: message,
            isUser: message.author.name === this.state.name && message.author.avatar === this.state.avatar
        }
    }

    makeMessage = (message: string) => {
        return {
            author: {
                name: this.state.name,
                avatar: this.state.avatar
            },
            body: message,
            date: new Date().toTimeString().slice(0,8),    
        }
    }

    setName = async (name: string) => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const decoded = await response.json();
        const url = decoded.message;
        this.setState({ name: name, avatar: url })
        console.log(name, url)
    }

    render(){
        const {name} = this.state;
        if(!name){
            return (
                <div className="App" style={{display: 'flex', justifyContent: 'center', background:'black', height:'100vh', paddingTop: '30px'}}>
                    <div style={{color: 'white', textAlign: 'center', padding: '10px'}}>Enter Yo Name</div>
                    <TextBox onSubmit={this.setName}/>
                </div>
            )
        }
        else{
            return (
                <div className="App" style={{display: 'flex', justifyContent: 'center', background:'black', height:'100vh', paddingTop: '30px'}}>
                    <Chat messages={this.state.messages} onSendMessage={this.sendMsg}/>
                </div>
            );      
        }
    }
    
}

export default App;
