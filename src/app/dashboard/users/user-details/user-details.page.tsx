import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { slug } = useParams();

  const { data: user } = useQuery({
    queryKey: ["user-details", slug],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${slug}`
      );
      return response.json();
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <h3 className="text-xl font-semibold">{user?.name}</h3>
      <p className="mt-2">{user?.email}</p>
      <p className="mt-2">{user?.phone}</p>
      <p className="mt-2">{user?.website}</p>
    </div>
  );
}
