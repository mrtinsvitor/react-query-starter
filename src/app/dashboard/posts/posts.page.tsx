import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Posts() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {posts.map((post: any) => (
              <li key={post.id} className="border p-4 rounded">
                <Link to={`${post.id}`}>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{post.body}</p>
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
