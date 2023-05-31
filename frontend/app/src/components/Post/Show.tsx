import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReturnToIndex } from "../share/ReturnToIndex";
import { fetchPost, useDeletePost } from "../../apis/posts";

export const Show = () => {
  interface Post {
    id: number;
    title: string;
    content: string;
  }

  const { postIdParams } = useParams();
  const [post, setPost] = useState<Post>();
  const deletePost = useDeletePost();

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

  return (
    <div>
      <h1>Show</h1>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>本文</th>
            <th>投稿の削除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post ? post.title : ""}</td>
            <td>{post ? post.content : ""}</td>
            <td>
              {post ? (
                <button
                  id={post.id.toString()}
                  onClick={() => deletePost(post.id.toString())}
                >
                  削除
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <ReturnToIndex />
    </div>
  );
};
