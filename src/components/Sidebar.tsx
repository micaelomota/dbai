import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Sidebar: React.FC = () => {
  const {
    data: databases,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["listDatabases"],
    queryFn: async () => await window.api.getDatabases(),
  });

  console.log(databases);

  const { db: activeDB } = useParams<{ db: string }>();

  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-semibold border-b border-gray-700">
        Sidebar
      </div>

      {databases && (
        <ul className="flex-1 p-4">
          {databases.map((db) => (
            <li
              key={db.datname}
              className={`mb-2 ${
                activeDB === db.datname ? "bg-slate-600" : ""
              }`}
            >
              <Link
                to={`/db/${db.datname}`}
                className="block p-2 rounded hover:bg-gray-700"
              >
                {db.datname}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* <ul className="flex-1 p-4">
        <li className="mb-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            About
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            Services
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            Contact
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
