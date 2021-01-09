import store from "../store";
import {
  setTypingValue,
  sendMessage,
  setActiveEditingMessage,
  updateMessage,
} from "../actions";

import "./MessageInput.css";

export default function MessageInput({ value }) {
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const state = store.getState();
    const { typing, activeUserId, activeEditingMessage } = state;
    const { messageId, userId } = activeEditingMessage;
    if (value) {
      if (activeEditingMessage.messageId) {
        store.dispatch(updateMessage(typing, messageId, userId));
        store.dispatch(setActiveEditingMessage(null, null));
      } else {
        store.dispatch(sendMessage(typing, activeUserId));
      }
    }
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
}
