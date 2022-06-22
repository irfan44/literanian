import Category from "pages/Category";
import Explore from "pages/Explore";
import Home from "pages/Home";
import Login from "pages/Login";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
};

export default AppRouter;
