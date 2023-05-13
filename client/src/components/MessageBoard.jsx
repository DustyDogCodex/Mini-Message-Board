import { Container } from "react-bootstrap";

function MessageBoard({ messages }){

    //message elements
    const messageElements = messages.map((message,index) => {
        return ( <div key={index}>{message.message} at {message.createdAt}</div>  )
    })
    console.log(messages)
    return(
        <Container>
            {messageElements}
        </Container>
    )
}

export default MessageBoard