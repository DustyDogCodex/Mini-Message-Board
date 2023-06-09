import { Container } from "react-bootstrap";

function Message({ name, message, createdAt }){
    return(
        <Container className="message-margin">
            <div className="p-2 d-flex flex-column justify-content-center align-items-center message">
                <p style={{fontSize:'24px'}}>{message}</p>
                <span>created by <span style={{color:'rgb(191, 87, 0)'}}>{name ? name : 'Anonymous'}</span> on {createdAt}</span>
            </div>
        </Container>
    )
}

export default Message