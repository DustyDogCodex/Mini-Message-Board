import { Container } from "react-bootstrap";
import messages from "./Messages";

function MessageBoard(){

    //message elements
    const messageElements = messages.map((message,index) => {
        return ( <div key={index}>{message.msg} by {message.name}</div>  )
    })

    return(
        <Container>
            {messageElements}
        </Container>
    )
}

export default MessageBoard