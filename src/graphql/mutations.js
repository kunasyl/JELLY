/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createDiary = /* GraphQL */ `
  mutation CreateDiary(
    $input: CreateDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    createDiary(input: $input, condition: $condition) {
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
export const updateDiary = /* GraphQL */ `
  mutation UpdateDiary(
    $input: UpdateDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    updateDiary(input: $input, condition: $condition) {
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
export const deleteDiary = /* GraphQL */ `
  mutation DeleteDiary(
    $input: DeleteDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    deleteDiary(input: $input, condition: $condition) {
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
export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
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
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
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
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createUserAuth = /* GraphQL */ `
  mutation CreateUserAuth(
    $input: CreateUserAuthInput!
    $condition: ModelUserAuthConditionInput
  ) {
    createUserAuth(input: $input, condition: $condition) {
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
export const updateUserAuth = /* GraphQL */ `
  mutation UpdateUserAuth(
    $input: UpdateUserAuthInput!
    $condition: ModelUserAuthConditionInput
  ) {
    updateUserAuth(input: $input, condition: $condition) {
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
export const deleteUserAuth = /* GraphQL */ `
  mutation DeleteUserAuth(
    $input: DeleteUserAuthInput!
    $condition: ModelUserAuthConditionInput
  ) {
    deleteUserAuth(input: $input, condition: $condition) {
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
export const createChatRoomUserAuth = /* GraphQL */ `
  mutation CreateChatRoomUserAuth(
    $input: CreateChatRoomUserAuthInput!
    $condition: ModelChatRoomUserAuthConditionInput
  ) {
    createChatRoomUserAuth(input: $input, condition: $condition) {
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
export const updateChatRoomUserAuth = /* GraphQL */ `
  mutation UpdateChatRoomUserAuth(
    $input: UpdateChatRoomUserAuthInput!
    $condition: ModelChatRoomUserAuthConditionInput
  ) {
    updateChatRoomUserAuth(input: $input, condition: $condition) {
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
export const deleteChatRoomUserAuth = /* GraphQL */ `
  mutation DeleteChatRoomUserAuth(
    $input: DeleteChatRoomUserAuthInput!
    $condition: ModelChatRoomUserAuthConditionInput
  ) {
    deleteChatRoomUserAuth(input: $input, condition: $condition) {
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
