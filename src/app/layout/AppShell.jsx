import { Outlet } from "react-router-dom";
import Header from "../navigation/Header.jsx";
import MobileHeader from "../navigation/MobileHeader.jsx";
import ScrollToTop from "../UI/ScrollToTop.jsx";

export default function AppShell() {
  return (
    <div className="bg-base-200 min-h-screen transition-colors duration-300">
      <ScrollToTop />

      <Header />
      <MobileHeader />

      <main className="w-full">
        <div className="hidden md:block h-16" />
        <Outlet />
      </main>
    </div>
  );
}