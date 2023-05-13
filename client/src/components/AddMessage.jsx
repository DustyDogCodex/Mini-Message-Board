import axios from 'axios'
import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

function AddMessage({ url }){

    //state variables to track form input
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    //POST messages
    async function createMessages(name,message){

        return axios.post(url, {
            name: name,
            message: message
        }).catch(function(error) {
            console.log(error.toJSON());
        }).then(setTimeout(() => {
                document.location.reload();
            }, 2000)
        )
    }

    function handleName(e){
        setName(e.target.value)
    }

    function handleMessage(e){
        setMessage(e.target.value)
    }

    function submitMessage(){
        createMessages(name,message)
        setName('')
        setMessage('')
    }

    return(
        <Container className='p-5'>
        <Form className='add-message p-5 text-light'>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message: </Form.Label>
                <Form.Control type="text" placeholder="Enter your message!" value={message}onChange={handleMessage}/>
            </Form.Group>

            <Button variant="primary" type="button" onClick={() => submitMessage()}>
                Submit your message!
            </Button>
        </Form>
        </Container>
    );
}

export default AddMessage