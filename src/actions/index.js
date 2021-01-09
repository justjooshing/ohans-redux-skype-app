import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  SET_ACTIVE_EDITING_MESSAGE,
  UPDATE_MESSAGE,
} from "../constants/action-types";

export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const setTypingValue = (value) => ({
  type: SET_TYPING_VALUE,
  payload: value,
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
  },
});

export const deleteMessage = (messageId, userId) => ({
  type: DELETE_MESSAGE,
  payload: {
    messageId,
    userId,
  },
});

export const setActiveEditingMessage = (userId, messageId) => ({
  type: SET_ACTIVE_EDITING_MESSAGE,
  payload: {
    userId,
    messageId,
  },
});

export const updateMessage = (text, messageId, userId) => ({
  type: UPDATE_MESSAGE,
  payload: {
    text,
    messageId,
    userId,
  },
});
