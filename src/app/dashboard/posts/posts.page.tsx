import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useFetchPosts } from "../../../hooks/useFetchPosts";

export default function Posts() {
  const { data: posts, isLoading } = useFetchPosts();
  const queryClient = useQueryClient();

  const { mutate: deletePost } = useMutation({
    mutationFn: (id: string) => {
      return fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <Link to="add-post">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Post
          </button>
        </Link>
      </div>
      <ul className="space-y-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {posts.map((post: any) => (
              <li
                key={post.id}
                className="border p-4 rounded flex justify-between"
              >
                <Link to={`${post.id}`}>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{post.content}</p>
                </Link>

                <button
                  onClick={() => deletePost(post.id)}
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
