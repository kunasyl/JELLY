import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerUserData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly photo?: string | null;
  readonly gender?: boolean | null;
  readonly birthdate?: string | null;
  readonly status?: boolean | null;
  readonly UserAuth?: UserAuth | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userDataUserAuthId?: string | null;
}

type LazyUserData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly photo?: string | null;
  readonly gender?: boolean | null;
  readonly birthdate?: string | null;
  readonly status?: boolean | null;
  readonly UserAuth: AsyncItem<UserAuth | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userDataUserAuthId?: string | null;
}

export declare type UserData = LazyLoading extends LazyLoadingDisabled ? EagerUserData : LazyUserData

export declare const UserData: (new (init: ModelInit<UserData>) => UserData) & {
  copyOf(source: UserData, mutator: (draft: MutableModel<UserData>) => MutableModel<UserData> | void): UserData;
}

type EagerUserAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly chatrooms?: (ChatRoomUserAuth | null)[] | null;
  readonly Messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly chatrooms: AsyncCollection<ChatRoomUserAuth>;
  readonly Messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserAuth = LazyLoading extends LazyLoadingDisabled ? EagerUserAuth : LazyUserAuth

export declare const UserAuth: (new (init: ModelInit<UserAuth>) => UserAuth) & {
  copyOf(source: UserAuth, mutator: (draft: MutableModel<UserAuth>) => MutableModel<UserAuth> | void): UserAuth;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly LastMessage?: Message | null;
  readonly Messages?: (Message | null)[] | null;
  readonly ChatRoomUsers?: (ChatRoomUserAuth | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly Messages: AsyncCollection<Message>;
  readonly ChatRoomUsers: AsyncCollection<ChatRoomUserAuth>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly chatroomID: string;
  readonly userauthID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly chatroomID: string;
  readonly userauthID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatRoomUserAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoomUserAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userAuthId?: string | null;
  readonly chatRoomId?: string | null;
  readonly userAuth: UserAuth;
  readonly chatRoom: ChatRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatRoomUserAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoomUserAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userAuthId?: string | null;
  readonly chatRoomId?: string | null;
  readonly userAuth: AsyncItem<UserAuth>;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatRoomUserAuth = LazyLoading extends LazyLoadingDisabled ? EagerChatRoomUserAuth : LazyChatRoomUserAuth

export declare const ChatRoomUserAuth: (new (init: ModelInit<ChatRoomUserAuth>) => ChatRoomUserAuth) & {
  copyOf(source: ChatRoomUserAuth, mutator: (draft: MutableModel<ChatRoomUserAuth>) => MutableModel<ChatRoomUserAuth> | void): ChatRoomUserAuth;
}