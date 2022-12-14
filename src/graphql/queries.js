/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      author
      body
      createdAt
      updatedAt
      blog_id
      author_name
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        body
        createdAt
        updatedAt
        blog_id
        author_name
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        author
        body
        createdAt
        updatedAt
        blog_id
        author_name
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const commentsByBlog_idAndCreatedAt = /* GraphQL */ `
  query CommentsByBlog_idAndCreatedAt(
    $blog_id: Int!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByBlog_idAndCreatedAt(
      blog_id: $blog_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        body
        createdAt
        updatedAt
        blog_id
        author_name
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDiary = /* GraphQL */ `
  query GetDiary($id: ID!) {
    getDiary(id: $id) {
      id
      titl
      content
      emoji
      userauthID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDiaries = /* GraphQL */ `
  query ListDiaries(
    $filter: ModelDiaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titl
        content
        emoji
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDiaries = /* GraphQL */ `
  query SyncDiaries(
    $filter: ModelDiaryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDiaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        titl
        content
        emoji
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const diariesByUserauthID = /* GraphQL */ `
  query DiariesByUserauthID(
    $userauthID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    diariesByUserauthID(
      userauthID: $userauthID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        titl
        content
        emoji
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserData = /* GraphQL */ `
  query GetUserData($id: ID!) {
    getUserData(id: $id) {
      id
      photo
      gender
      birthdate
      status
      UserAuth {
        id
        name
        username
        email
        phone_number
        chatrooms {
          nextToken
          startedAt
        }
        Messages {
          nextToken
          startedAt
        }
        Diaries {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userDataUserAuthId
    }
  }
`;
export const listUserData = /* GraphQL */ `
  query ListUserData(
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        photo
        gender
        birthdate
        status
        UserAuth {
          id
          name
          username
          email
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userDataUserAuthId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserData = /* GraphQL */ `
  query SyncUserData(
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        photo
        gender
        birthdate
        status
        UserAuth {
          id
          name
          username
          email
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userDataUserAuthId
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      chatroomID
      userauthID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        chatroomID
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        chatroomID
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByChatroomID = /* GraphQL */ `
  query MessagesByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        chatroomID
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByUserauthID = /* GraphQL */ `
  query MessagesByUserauthID(
    $userauthID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserauthID(
      userauthID: $userauthID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        chatroomID
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      newMessages
      LastMessage {
        id
        content
        chatroomID
        userauthID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Messages {
        items {
          id
          content
          chatroomID
          userauthID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ChatRoomUsers {
        items {
          id
          chatRoomId
          userAuthId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        newMessages
        LastMessage {
          id
          content
          chatroomID
          userauthID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatRoomUsers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        newMessages
        LastMessage {
          id
          content
          chatroomID
          userauthID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatRoomUsers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserAuth = /* GraphQL */ `
  query GetUserAuth($id: ID!) {
    getUserAuth(id: $id) {
      id
      name
      username
      email
      phone_number
      chatrooms {
        items {
          id
          chatRoomId
          userAuthId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Messages {
        items {
          id
          content
          chatroomID
          userauthID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Diaries {
        items {
          id
          titl
          content
          emoji
          userauthID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserAuths = /* GraphQL */ `
  query ListUserAuths(
    $filter: ModelUserAuthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAuths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        email
        phone_number
        chatrooms {
          nextToken
          startedAt
        }
        Messages {
          nextToken
          startedAt
        }
        Diaries {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserAuths = /* GraphQL */ `
  query SyncUserAuths(
    $filter: ModelUserAuthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserAuths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        username
        email
        phone_number
        chatrooms {
          nextToken
          startedAt
        }
        Messages {
          nextToken
          startedAt
        }
        Diaries {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatRoomUserAuth = /* GraphQL */ `
  query GetChatRoomUserAuth($id: ID!) {
    getChatRoomUserAuth(id: $id) {
      id
      chatRoomId
      userAuthId
      chatRoom {
        id
        newMessages
        LastMessage {
          id
          content
          chatroomID
          userauthID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatRoomUsers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      userAuth {
        id
        name
        username
        email
        phone_number
        chatrooms {
          nextToken
          startedAt
        }
        Messages {
          nextToken
          startedAt
        }
        Diaries {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listChatRoomUserAuths = /* GraphQL */ `
  query ListChatRoomUserAuths(
    $filter: ModelChatRoomUserAuthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUserAuths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userAuthId
        chatRoom {
          id
          newMessages
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        userAuth {
          id
          name
          username
          email
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatRoomUserAuths = /* GraphQL */ `
  query SyncChatRoomUserAuths(
    $filter: ModelChatRoomUserAuthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRoomUserAuths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chatRoomId
        userAuthId
        chatRoom {
          id
          newMessages
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        userAuth {
          id
          name
          username
          email
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const chatRoomUserAuthsByChatRoomId = /* GraphQL */ `
  query ChatRoomUserAuthsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserAuthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUserAuthsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userAuthId
        chatRoom {
          id
          newMessages
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        userAuth {
          id
          name
          username
          email
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const chatRoomUserAuthsByUserAuthId = /* GraphQL */ `
  query ChatRoomUserAuthsByUserAuthId(
    $userAuthId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserAuthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUserAuthsByUserAuthId(
      userAuthId: $userAuthId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userAuthId
        chatRoom {
          id
          newMessages
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        userAuth {
          id
          name
          username
          email
          phone_number
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
