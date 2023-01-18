import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div className="background">
            <div style={{ height: '80%', width: '80%', marginLeft: '10%', color: 'white', background: "rgb(43, 47, 60)" }}>
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