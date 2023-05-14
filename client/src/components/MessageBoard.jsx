import Message from "./Message";
import { Container } from "react-bootstrap";

function MessageBoard({ messages }){

    //message elements
    const messageElements = messages.map((message,index) => {
        return ( <Message key={index} name={message.name} message={message.message} createdAt={message.createdAt}/> )
    })

    return(
        <Container className="p-5">
            {messageElements}
        </Container>
    )
}

export default MessageBoard