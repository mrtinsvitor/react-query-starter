import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";

export default function PostDetails() {
  const { data: post, isLoading } = useQuery({
    queryKey: ["post-detail"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const isCommentsActive = window.location.pathname.includes("comments");
  const commentsLinkText = isCommentsActive ? "Hide Comments" : "View Comments";
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Post Details</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3 className="text-xl font-semibold">{post?.title}</h3>
          <p className="mt-2">{post?.body}</p>
        </>
      )}
      <Link
        to={isCommentsActive ? `.` : `comments`}
        className="text-blue-500 underline mt-4"
      >
        {commentsLinkText}
      </Link>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
