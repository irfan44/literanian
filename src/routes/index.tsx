import Category from "pages/Category";
import CategoryArticles from "pages/Category/[slug]";
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
      <Route path="/category/:slug" element={<CategoryArticles />} />
    </Routes>
  );
};

export default AppRouter;
