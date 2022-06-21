import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useLocation } from "react-router-dom";
import AppRouter from "routes";

const Main = () => {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  return (
    <>
      {!isLogin && <Navbar />}
      <AppRouter />
      {!isLogin && <Footer />}
    </>
  );
};

export default Main;
