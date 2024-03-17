import { addPost, deletePost, profileReducer } from "./profile-reducer";
import { v1 } from "uuid";

test("length of posts should be incremented", () => {
  const state = {
    posts: [
      { id: v1(), message: "Добро пожаловать в мою социальную сеть «Welcome»", likesCount: 15 },
      { id: v1(), message: "Всем привет!", likesCount: 11 },
    ],
    profile: null,
    status: "-",
  };

  const action = addPost("test newPostText");

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

test("message of new post should be correct", () => {
  const state = {
    posts: [
      { id: v1(), message: "Добро пожаловать в мою социальную сеть «Welcome»", likesCount: 15 },
      { id: v1(), message: "Всем привет!", likesCount: 11 },
    ],
    profile: null,
    status: "-",
  };

  const action = addPost("test newPostText");

  const newState = profileReducer(state, action);

  expect(newState.posts[0].message).toBe("test newPostText");
});

test("after deleting length of messages should be decrement", () => {
  const state = {
    posts: [
      { id: v1(), message: "Добро пожаловать в мою социальную сеть «Welcome»", likesCount: 15 },
      { id: v1(), message: "Всем привет!", likesCount: 11 },
      { id: v1(), message: "test", likesCount: 0 },
    ],
    profile: null,
    status: "-",
  };

  const action = deletePost(state.posts[0].id);

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
  expect(newState.posts[0].message).toBe("Всем привет!");
});
