import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID='c401ec20-0d9e-41ff-a218-415b0047f5e9';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    //If there is no username stored then we return the loginform

    return(
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            renderIsTyping={(typers)=>{}}
        />
    );
};

export default App;