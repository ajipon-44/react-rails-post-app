import { Link } from "react-router-dom";

interface Post {
  post: {
    id: number;
    title: string;
    content: string;
  };
}

export const TableRecord = ({ post }: Post) => {
  return (
    <>
      <td>{post.title}</td>
      <td>
        <Link to={`/posts/${post.id}`}>Show</Link>
      </td>
      <td>
        <Link to={`/posts/edit/${post.id}`}>Edit</Link>
      </td>
    </>
  );
};
