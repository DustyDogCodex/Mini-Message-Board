import Message from "./Message";
import { Container } from "react-bootstrap";

function MessageBoard({ messages }){

    //message elements
    const messageElements = messages.map((message,index) => {
        return ( <Message key={index} message={message.message} createdAt={message.createdAt}/> )
    })
    console.log(messages)
    return(
        <Container>
            {messageElements}
        </Container>
    )
}

export default MessageBoard