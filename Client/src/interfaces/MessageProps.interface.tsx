export default interface MessageProps { 
    message: {
        author: {
            name: string,
            avatar: string,
        }
        body: string,
        date?: string,    
    }
    isUser?: boolean
}

