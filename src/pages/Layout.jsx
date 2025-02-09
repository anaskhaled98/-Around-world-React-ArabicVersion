import Header from "../components/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen font-inter text-base text-custom-black dark:bg-gray-900 dark:text-custom-gray">
      <Header />
      <div className="container mx-auto px-9">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
