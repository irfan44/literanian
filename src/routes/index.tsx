import Category from "pages/Category";
import CategoryArticles from "pages/Category/[slug]";
import Explore from "pages/Explore";
import Home from "pages/Home";
import Login from "pages/Login";
import { Route, Routes } from "react-router-dom";
import ArticleContent from "pages/ContentArticle";
import AboutUs from "pages/AboutUs";
import Page404 from "pages/404";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/article/:slug" element={<ArticleContent />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:slug" element={<CategoryArticles />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;
