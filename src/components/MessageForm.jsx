import {useState} from 'react';
import {sendMessage} from 'react-chat-engine';
import {SendOutlined , PictureOutlined} from '@ant-design/icons';

const MessageForm =(props) =>{
    const [value,setValue] = useState('');  //using state to type in some message
    const {chatId,creds} = props;
    
    const handleChange=(event) =>{
        setValue(event.target.value);   //this is where value of input is stored

    }
    
    const handleSubmit =(event) =>{
        event.preventDefault();         //on submission by default browser refeshes
        //we have to prevent that
        const text = value.trim();      //trim removes leading and trailing white space
        
        if(text.length > 0)
            sendMessage(creds,chatId,{text});
        
            setValue('');               //this makes the form empty after entry
    }

    const handleUpload=(event) =>{
        sendMessage(creds, chatId , {files: event.target.files ,text:''})
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined  className="pictue-icon"/>
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{display:'none'}}
                onChange={handleUpload.bind(this)}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>


    );
}

export default MessageForm;