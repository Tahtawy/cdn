import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="grid grid-cols-[19%_79%]">
      <aside className="flex flex-col gap-3 p-3">
        <Link
          className="bg-blue-600 text-white px-4 py-3"
          to="main.aspx#!dev|module_sample_manager"
        >
          User Home
        </Link>
        <Link className="bg-blue-600 text-white px-5 py-4" to="/counter">
          Counter
        </Link>
      </aside>
      <div className="bg-white h-screen p-3">
        <Outlet />
      </div>
    </div>
  );
};
