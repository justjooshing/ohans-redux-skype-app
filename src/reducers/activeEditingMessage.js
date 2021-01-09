import { SET_ACTIVE_EDITING_MESSAGE } from "../constants/action-types";

export default function activeUserId(state = "", action) {
  switch (action.type) {
    case SET_ACTIVE_EDITING_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
