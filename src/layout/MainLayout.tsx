import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};
