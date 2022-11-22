// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserData, UserAuth, ChatRoom, Message, ChatRoomUserAuth } = initSchema(schema);

export {
  UserData,
  UserAuth,
  ChatRoom,
  Message,
  ChatRoomUserAuth
};