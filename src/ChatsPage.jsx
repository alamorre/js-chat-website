// import { 
//     useMultiChatLogic, 
//     MultiChatSocket, 
//     MultiChatWindow 
// } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    return (
        <div className="background">
            <div style={{ height: '80%', width: '80%', marginLeft: '10%', color: 'white', background: "rgb(43, 47, 60)" }}>
                My chats...<br/>
                Username: {props.user.username}<br/>
                Secret: {props.user.secret}
            </div>
        </div>
    );
}

export default ChatsPage