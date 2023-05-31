import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  DEFAULT_API_LOCALHOST,
  postShow,
  postCreate,
  postDelete,
  postEdit,
} from "../urls";

interface Post {
  title: string;
  content: string;
}

export const fetchPosts = () => {
  return axios
    .get(DEFAULT_API_LOCALHOST)
    .then((res) => {
      return res.data.posts;
    })
    .catch((err) => {
      return console.error(err);
    });
};

export const fetchPost = async (postId: string) => {
  try {
    const response = await axios.get(postShow(postId));
    return response.data.post;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (post: Post) => {
  try {
    const response = await axios.post(postCreate, post);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const useDeletePost = () => {
  const navigate = useNavigate();

  const deletePost = async (postId: string) => {
    if (window.confirm("本当に削除しますか？")) {
      try {
        await axios.delete(postDelete(postId));
        navigate("/posts/index");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return deletePost;
};

export const useEditPost = () => {
  const navigate = useNavigate();

  const editPost = async (postId: string, post: Post) => {
    try {
      await axios.put(postEdit(postId), post);
      navigate("/posts/index");
    } catch (error) {
      console.error(error);
    }
  };
  return editPost;
};

// export const editPost = async (postId: string) => {
//   try {
//     const response = await axios.put(postEdit(postId));
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };
