// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Diary, UserData, UserAuth, ChatRoom, Message, ChatRoomUserAuth } = initSchema(schema);

export {
  Diary,
  UserData,
  UserAuth,
  ChatRoom,
  Message,
  ChatRoomUserAuth
};