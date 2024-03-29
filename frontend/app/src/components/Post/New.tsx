import { SetStateAction, useState } from "react";
import { ReturnToIndex } from "../share/ReturnToIndex";
import { createPost } from "../../apis/posts";
import { useNavigate } from "react-router-dom";

export const New = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeTitle = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    try {
      createPost({ title: title, content: content });
      navigate("/posts/index");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>New</h1>
      <form action="">
        <div>
          title:
          <input type="text" onChange={handleChangeTitle} />
        </div>
        <div>
          content:
          <input type="text" onChange={handleChangeContent} />
        </div>
        <button onClick={handleSubmit}>Create Post</button>
      </form>
      <ReturnToIndex />
    </div>
  );
};
