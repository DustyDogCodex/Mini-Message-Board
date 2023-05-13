import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import AddMessage from './components/AddMessage';
import MessageBoard from './components/MessageBoard';
import NavComponent from './components/NavComponent';

function App() {
  //url for getting messages from. Using localhost for dev
  const url = 'http://localhost:5000/messages/'

  //state variables for keeping track of messages on display
  const [messages , setMessages] = useState([])

  //GET messages
  /* function getMessages() {
    return new Promise(
  } */

  //useEffect hook to connect to our server API
  useEffect(() => {
    const getMessages = async() => {
      const res = await axios.get(url)
      const data = res.data
      setMessages(data.map(
        message => ({
          ...message,
          createdAt: message.createdAt
        })
      ))
    }
    getMessages()
  },[])

  //POST Messages
  //function to post messages to database is inside the AddMessage component!

  //DELETE messages
  function deleteMessages(id){
    return axios.delete(`${url}${id}`)
  }

  return (
    <div className="App">
      <NavComponent />
      <AddMessage url={url}/>
      <MessageBoard messages={messages}/>
    </div>
  );
}

export default App;
