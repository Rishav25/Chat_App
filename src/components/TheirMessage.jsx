const TheirMessage =({lastMessage,message}) =>{
    const isFirstMessageByUser =! lastMessage || lastMessage.sender.username !== message.sender.username
    //checking if a message is first message by that user
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: message.sender && `url(${message.sender.avatar})`}}
                    />
            )}
            {/*We check for all other messages like we did in MyMessage
                first we check if it is an image, if an image we paste the image
                code from mymessage and if not a message we put the message
                text in the div
            */}
            
                {message.attachments && message?.attachments?.length >0 //checking if message is a picture or text
                    ?(
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{marginLeft : isFirstMessageByUser? '4px' : '48px'}}
                        />
                    ) 
                    :(
                        <div className="message" style={{float:'left',backgroundColor:'#CABCDC',marginLeft : isFirstMessageByUser? '4px' : '48px'}}>
                                {message.text}
                        </div>
                    )
                }
        </div>
    );
}

export default TheirMessage;