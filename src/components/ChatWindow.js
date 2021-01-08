import _ from "lodash";

import store from "../store";
import Header from "./Header";
import Chats from "./Chats";

import "./ChatWindow.css";

export default function ChatWindow({ activeUserId }) {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
    </div>
  );
}
