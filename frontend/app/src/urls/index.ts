export const DEFAULT_API_LOCALHOST = "http://localhost:3001/posts";

export const postsIndex = `${DEFAULT_API_LOCALHOST}`;
export const postShow = (postId: string) =>
  `${DEFAULT_API_LOCALHOST}/${postId}`;
export const postCreate = `${DEFAULT_API_LOCALHOST}/`;
export const postEdit = (postId: string) =>
  `${DEFAULT_API_LOCALHOST}/${postId}`;
export const postDelete = (postId: string) =>
  `${DEFAULT_API_LOCALHOST}/${postId}`;
