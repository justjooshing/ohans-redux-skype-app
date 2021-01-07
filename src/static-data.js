import { nanoid } from "nanoid";
import { sentence } from "txtgen";
import faker from "faker";
import _ from "lodash";

import defaultProfilePicture from "./images/default_user_profile_picture.jpg";

export const getMessages = (messagesPerUser) => {
  let messages = {};
  _.forEach(users, (user) => {
    messages[user.user_id] = {
      ..._.keyBy(generateMsgs(messagesPerUser), "number"),
    };
  });
  return messages;
};

export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: defaultProfilePicture,
    status: sentence(),
    user_id: nanoid(15),
  };
}

const generateUsers = (numberOfUsers) => {
  return Array.from({ length: numberOfUsers }, () => generateUser());
};

const generateMsg = (number) => {
  return {
    number,
    text: sentence(),
    is_user_msg: faker.random.boolean(),
  };
};

const generateMsgs = (numberOfMsgs) => {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
};

const users = generateUsers(10);

export const contacts = _.mapKeys(users, "user_id");

export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null,
};
