import { Container } from "react-bootstrap";

function Message({ message, createdAt }){
    return(
        <Container className="m-5">
            <div className="p-3 d-flex flex-column justify-content-center align-items-center message">
                <p>{message}</p>
                <span>{createdAt}</span>
            </div>
        </Container>
    )
}

export default Message