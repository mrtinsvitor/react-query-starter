import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function UsersList() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          users?.map((user: any) => (
            <li key={user.id} className="border p-4 rounded">
              <Link to={`${user.id}`}>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p>{user.email}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
