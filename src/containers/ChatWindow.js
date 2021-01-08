import _ from "lodash";

import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from "./MessageInput";

import "./ChatWindow.css";

export default function ChatWindow({ activeUserId }) {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
}
