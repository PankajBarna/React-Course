import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import MainContent from "./components/Main-content/Main-content";

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <MainContent> */}
      <main className="ml-64 mt-16 p-16 bg-slate-200 rounded-xl m-6 min-h-[calc(100vh-4rem-3rem-6rem-2rem)] overflow-hidden">
        <Outlet />
      </main>
      {/* <Outlet />
            </MainContent> */}
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default Layout;
