//this is the form where people will be entering their
//username and password

import {useState} from 'react';
import axios from 'axios';  //making an api call

const projectID = 'c401ec20-0d9e-41ff-a218-415b0047f5e9';

const LoginForm =() =>{
    const [username,setUsername] =useState('');
    const [password,setPassword] =useState('');
    const [error,setError] =useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        //after entering username and password we should get back the 
        //messages
        //if we cant get back the messages then return error message
        const authObject ={'Project-ID':projectID,'User-Name':username,'User-Secret':password}

        try{
            //enter username | password
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
            setError('');
            //we have this reload statement here because if we are not
            //logged in then we should get the login screen and not the cht engine
            //this is making an api call
            //works out -> logged in
            //if logged in we should save it for every time
        }catch(err){
            setError('Username or Password is incorrect');
        }

    };

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">WELCOME</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)}
                    className="input" placeholder="Username" required/>
                    {/*the username state is stored in e and in the nest line password is stored in e*/}
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}
                    className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>
        </div>
    );

};
export default LoginForm;