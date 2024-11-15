import { useQuery } from "@tanstack/react-query";

export const useFetchPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
};
