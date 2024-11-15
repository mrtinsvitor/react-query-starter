import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./App.tsx";
import DashboardLayout from "./app/dashboard/dashboard.layout.tsx";
import AddPost from "./app/dashboard/posts/add-post.page.tsx";
import Comments from "./app/dashboard/posts/comments/comments.page.tsx";
import PostDetails from "./app/dashboard/posts/post-details/posts-details.page.tsx";
import Posts from "./app/dashboard/posts/posts.page.tsx";
import UserDetails from "./app/dashboard/users/user-details/user-details.page.tsx";
import UsersList from "./app/dashboard/users/users.page.tsx";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/add-post",
        element: <AddPost />,
      },
      {
        path: "posts/:slug",
        element: <PostDetails />,
        children: [
          {
            path: "comments",
            element: <Comments />,
          },
        ],
      },
      {
        path: "users",
        element: <UsersList />,
      },
      {
        path: "users/:slug",
        element: <UserDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
