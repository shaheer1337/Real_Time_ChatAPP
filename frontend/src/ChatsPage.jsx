import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "1e2635a9-ad15-4d3a-9c7d-6ec6bf5f74a4",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />

      <PrettyChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};

export default ChatsPage;
