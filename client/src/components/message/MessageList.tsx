import { 
    Container 
} from "react-bootstrap";
import Message from "../../interfaces/Message";
import User from "../../interfaces/User";
import '../../styles/MessageList.css'

interface MessageI {
    message: Message;
    user: User
}

const MessageList = ({message, user}: MessageI) => {
    return(
        <Container>
                <div className="contents">
                        <img 
                            src={user.avatar}
                            alt={user.user_id + '-avatar'} 
                            className="avatar-1BDn8e"
                        />
                        <h2 className="header-23xsNx">
                            <span 
                                id={user.user_id + '-messageContent'}
                                className="headerText-3Uvj1Y"
                            >
                                <span role="button" className="username-1A8OIy">
                                        {user.username}
                                </span>
                            </span>
                            <span className="timestamp-3ZCmNB">
                                    <time className="timestamp">
                                            <i className="separator-2nZzUB">
                                                    {message.created_at}
                                            </i>
                                    </time>
                            </span>
                            <div className="messageContent-2qWWxC"  id={'message-content' + message.message_id}> 
                                    {message.content}
                            </div>
                        </h2>
                </div>
        </Container>
    )
}

export default MessageList