import { Link, Outlet, useParams } from "react-router-dom";
import { useFetchPostDetails } from "../../../../hooks/useFetchPostDetails";

export default function PostDetails() {
  const { slug } = useParams();

  const { data: post, isLoading } = useFetchPostDetails(slug || "");

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
          <p className="mt-2">{post?.content}</p>
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
