import { useEffect, useRef } from "react";

import "./Chats.css";

export default function Chats({ messages }) {
  const chatsRef = useRef();

  const scrollToBottom = () => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  });

  const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
      <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
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
