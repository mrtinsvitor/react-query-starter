import { useQuery } from "@tanstack/react-query";

export const useFetchPostDetails = (slug: string) => {
  return useQuery({
    queryKey: ["post-details", slug],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/posts/${slug}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
};
