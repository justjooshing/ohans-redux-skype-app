import store from "../store";
import { setTypingValue } from "../actions";

import "./MessageInput.css";

export default function MessageInput({ value }) {
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="Message">
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
}
