import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import AddMessage from './components/AddMessage';
import MessageBoard from './components/MessageBoard';

function App() {
  //url for getting messages from. Using localhost for dev
  const url = 'https://difficult-suit-pig.cyclic.app/messages/'

  //state variables for keeping track of messages on display
  const [messages , setMessages] = useState([])

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
      ).reverse())
    }
    getMessages()
  },[])

  //POST Messages
  //function to post messages to database is inside the AddMessage component!

  //DELETE messages
  //will add a small function to ask for a secret password before letting users delete posts.
  /* function deleteMessages(id){
    return axios.delete(`${url}${id}`)
  } */

  return (
    <div className="App">
      <AddMessage url={url}/>
      <MessageBoard messages={messages}/>
    </div>
  );
}

export default App;
