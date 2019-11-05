import MessageProps from './MessageProps.interface';

export default interface ChatProps {
    onSendMessage: (message: string) => void,
    messages: MessageProps[]
}

