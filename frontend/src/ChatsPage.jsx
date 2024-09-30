import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="1e2635a9-ad15-4d3a-9c7d-6ec6bf5f74a4"
        username={props.user.username}
        secret={props.user.username}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
