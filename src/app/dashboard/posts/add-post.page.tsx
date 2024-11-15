import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: addPost } = useMutation({
    mutationFn: (newPost: { title: string; content: string }) => {
      return fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/app/posts");
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          required
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addPost({ title, content })}
      >
        Add Post
      </button>
    </div>
  );
}
