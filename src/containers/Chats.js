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
    let currentMessage = messages[activeUserId][number].text;
    currentMessage = currentMessage.endsWith("[edited]")
      ? currentMessage.substring(0, currentMessage.length - 9)
      : currentMessage;
    store.dispatch(setTypingValue(currentMessage));
    store.dispatch(setActiveEditingMessage(activeUserId, number));
  };

  const Chat = ({ message }) => {
    const { text, is_user_msg, number } = message;
    const state = store.getState();
    const selectedMessage = state.activeEditingMessage;
    const { userId, messageId } = selectedMessage;

    let className = "Chat";
    className = is_user_msg ? className.concat(" is-user-msg") : className;
    className =
      state.activeUserId === userId && number === messageId
        ? className.concat(" editing-message")
        : className;

    return (
      <div className={className}>
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
