/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      author
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      author
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      author
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDiary = /* GraphQL */ `
  subscription OnCreateDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onCreateDiary(filter: $filter) {
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
export const onUpdateDiary = /* GraphQL */ `
  subscription OnUpdateDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onUpdateDiary(filter: $filter) {
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
export const onDeleteDiary = /* GraphQL */ `
  subscription OnDeleteDiary($filter: ModelSubscriptionDiaryFilterInput) {
    onDeleteDiary(filter: $filter) {
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
export const onCreateUserData = /* GraphQL */ `
  subscription OnCreateUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onCreateUserData(filter: $filter) {
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
export const onUpdateUserData = /* GraphQL */ `
  subscription OnUpdateUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onUpdateUserData(filter: $filter) {
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
export const onDeleteUserData = /* GraphQL */ `
  subscription OnDeleteUserData($filter: ModelSubscriptionUserDataFilterInput) {
    onDeleteUserData(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateUserAuth = /* GraphQL */ `
  subscription OnCreateUserAuth($filter: ModelSubscriptionUserAuthFilterInput) {
    onCreateUserAuth(filter: $filter) {
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
export const onUpdateUserAuth = /* GraphQL */ `
  subscription OnUpdateUserAuth($filter: ModelSubscriptionUserAuthFilterInput) {
    onUpdateUserAuth(filter: $filter) {
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
export const onDeleteUserAuth = /* GraphQL */ `
  subscription OnDeleteUserAuth($filter: ModelSubscriptionUserAuthFilterInput) {
    onDeleteUserAuth(filter: $filter) {
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
export const onCreateChatRoomUserAuth = /* GraphQL */ `
  subscription OnCreateChatRoomUserAuth(
    $filter: ModelSubscriptionChatRoomUserAuthFilterInput
  ) {
    onCreateChatRoomUserAuth(filter: $filter) {
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
export const onUpdateChatRoomUserAuth = /* GraphQL */ `
  subscription OnUpdateChatRoomUserAuth(
    $filter: ModelSubscriptionChatRoomUserAuthFilterInput
  ) {
    onUpdateChatRoomUserAuth(filter: $filter) {
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
export const onDeleteChatRoomUserAuth = /* GraphQL */ `
  subscription OnDeleteChatRoomUserAuth(
    $filter: ModelSubscriptionChatRoomUserAuthFilterInput
  ) {
    onDeleteChatRoomUserAuth(filter: $filter) {
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
