import _ from "lodash";

import { getMessages } from "../static-data";
import { DELETE_MESSAGE, SEND_MESSAGE } from "../constants/action-types";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true,
          },
        },
      };
    }
    case DELETE_MESSAGE:
      const { messageId, userId } = action.payload;
      const allUserMsgs = state[userId];
      const msgsWithoutDeletedMessage = _.omit(allUserMsgs, messageId);
      return {
        ...state,
        [userId]: {
          ...msgsWithoutDeletedMessage,
        },
      };
    default:
      return state;
  }
}
