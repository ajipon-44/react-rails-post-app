import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TableRecord } from "./TableRecord";
import { fetchPosts } from "../../apis/posts";

export const Index = () => {
  interface Post {
    id: number;
    title: string;
    content: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((response) => setPosts(response));
  }, []);

  return (
    <div>
      <h1>Index</h1>
      <div>
        <Link to="/posts/new">New</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>詳細</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <TableRecord post={post} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
