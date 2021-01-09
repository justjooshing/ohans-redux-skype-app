import { useEffect, useRef } from "react";
import store from "../store";
import {
  deleteMessage,
  setTypingValue,
  setActiveEditingMessage,
} from "../actions";

import "./Chats.css";

export default function Chats({ messages }) {
  const chatsRef = useRef();

  const scrollToBottom = () => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  });

  const handleDeleteClick = ({ number }) => {
    const state = store.getState();
    const { activeUserId } = state;
    store.dispatch(deleteMessage(number, activeUserId));
  };

  const clickEditMessage = ({ number }) => {
    const state = store.getState();
    const { activeUserId, messages } = state;
    store.dispatch(setActiveEditingMessage(activeUserId, number));
    const currentMessage = messages[activeUserId][number].text;
    store.dispatch(setTypingValue(currentMessage));
  };

  const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
      <div className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
        <span onClick={is_user_msg ? () => clickEditMessage(message) : null}>
          {text}
        </span>
        <span
          className="Chat__deleteBtn"
          onClick={() => handleDeleteClick(message)}
        >
          X
        </span>
      </div>
    );
  };

  return (
    <div className="Chats" ref={chatsRef}>
      {messages.map((message) => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
}
