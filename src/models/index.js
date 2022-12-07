// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Diary, UserData, UserAuth, ChatRoom, Message, ChatRoomUserAuth } = initSchema(schema);

export {
  Comment,
  Diary,
  UserData,
  UserAuth,
  ChatRoom,
  Message,
  ChatRoomUserAuth
};