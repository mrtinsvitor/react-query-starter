import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function Comments() {
  const { slug } = useParams();

  const { data: comments, isLoading } = useQuery({
    queryKey: ["post-comments", slug],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${slug}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      <ul className="space-y-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          comments?.map((comment: any) => (
            <li key={comment.id} className="border p-4 rounded">
              <h3 className="text-xl font-semibold">{comment.name}</h3>
              <p>{comment.body}</p>
              <p className="mt-2 text-gray-600">By: {comment.email}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
