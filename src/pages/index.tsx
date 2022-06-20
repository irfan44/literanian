import Footer from "components/Footer";
import Navbar from "components/Navbar";
import AppRouter from "routes";

const Main = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default Main;
