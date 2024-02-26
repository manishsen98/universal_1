import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <div className="button">
        <button>Book a consultation now</button>
      </div>
    </>
  );
};

export default Layout;

export const UnAuthLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
