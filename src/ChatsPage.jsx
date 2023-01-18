import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div className="background">
            <div className='chat-wrapper'>
                <PrettyChatWindow
                    projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
                    username={props.user.username}
                    secret={props.user.secret}
                />
            </div>
        </div>
    );
}

export default ChatsPage