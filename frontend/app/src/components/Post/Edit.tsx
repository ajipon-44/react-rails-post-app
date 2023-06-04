import { ReturnToIndex } from "../share/ReturnToIndex";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost, useEditPost } from "../../apis/posts";
import { useNavigate } from "react-router-dom";

export const Edit = () => {
  interface Post {
    title: string;
    content: string;
  }

  const { postIdParams } = useParams();
  const [post, setPost] = useState<Post>();
  const editPost = useEditPost();
  const navigate = useNavigate();

  useEffect(() => {
    if (postIdParams) {
      fetchPost(postIdParams)
        .then((response) => {
          setPost(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return () => {
      setPost(undefined);
    };
  }, [postIdParams]);

  const [title, setTitle] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleEditPost = () => {
    if (postIdParams && title !== undefined && content !== undefined) {
      const updatedPost: Post = {
        title,
        content,
      };
      editPost(postIdParams, updatedPost);
      navigate("/posts/index");
    } else {
      console.log("title or content is undefined");
    }
  };

  return (
    <div>
      <h1>Edit</h1>
      <form action="">
        <div>
          title:
          <input
            type="text"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          content:
          <input
            type="text"
            value={content || ""}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={handleEditPost}>Edit Post</button>
      </form>
      <ReturnToIndex />
    </div>
  );
};
