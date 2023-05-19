# Mini-Message-Board

![message-received](https://tenor.com/view/received-message-received-jim-carrey-gif-13274562.gif)

<a href="https://mini-message-board-production-83b4.up.railway.app/" target="_blank" rel="noopener noreferrer">LIVE DEMO</a>

Created a mini message board using ReactJS and Express.

For this project I built a full stack message board that lets users leave a message with either a chosen username or anonymously. This project uses ReactJs and react-bootstrap for the front-end and uses Node/Express for its backend. The messages and author names are stored in a Mongodb database. 

Through this project I learnt how to:

1. Make a full stack application by connecting the front-end with a backend that handles http requests sent to it.

2. Connect a MongoDB database to an application to store and retrieve data.

3. Work with a back-end framework like Express to handle https requests sent to it from the client side and responding with an appropriate https response like creating a new message on the message board.

4. Use a cloud platform like Railways to host a full stack app.

5. Hide secrets like API keys and database connection strings using environment variables in an .env file.

Future enhancements/features to be added:

1. Adding options to let users update or delete their messages, making this a complete CRUD app.

2. Adding authentication using PassportJS to allow users to create accounts and track their messages/message history.

3. Allowing users to add images/gifs along with their messages.

4. Adding a loading animation/screen while the app is loading messages.