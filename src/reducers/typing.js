import {
  SEND_MESSAGE,
  SET_TYPING_VALUE,
  UPDATE_MESSAGE,
} from "../constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case UPDATE_MESSAGE:
      return "";
    default:
      return state;
  }
}
