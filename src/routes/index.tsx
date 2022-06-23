import Explore from "pages/Explore";
import Home from "pages/Home";
import Login from "pages/Login";
import { Route, Routes } from "react-router-dom";
import ArticleContent from "pages/ArticleContent";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/article/:slug"element={<ArticleContent />} />
    </Routes>
  );
};

export default AppRouter;
