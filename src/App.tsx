import { useState } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to React Query Starter
          </h1>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <Link to="/app">Go to app</Link>
        </nav>
      </div>
    </div>
  );
}

export default Welcome;
