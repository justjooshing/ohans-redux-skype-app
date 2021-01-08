import { useEffect, useRef } from "react";
import store from "../store";
import { deleteMessage } from "../actions";

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

  const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
      <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
        <span
          className="Chat__deleteBtn"
          onClick={() => handleDeleteClick(message)}
        >
          X
        </span>
        {text}
      </span>
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
