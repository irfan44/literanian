import { Box } from "@chakra-ui/react";
import {
  fetchAllArticles,
  fetchAllBasicArticles,
  fetchLatestArticles,
  fetchPremiumArticles,
} from "api/graphcms";
import ArticleLists from "components/pages/explore/ArticleList";
import PremiumArticleList from "components/pages/explore/PremiumArticleList";
import UserDashboard from "components/pages/explore/UserDashboard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { ArticleData } from "types/article";

const Explore = () => {
  const [latestArticles, setLatestArticles] = useState<ArticleData[]>([]);
  const [premiumArticles, setPremiumArticles] = useState<ArticleData[]>([]);
  const [allArticles, setAllArticles] = useState<ArticleData[]>([]);

  const { uid } = useAppSelector((state) => state.userProfile);
  const { premium } = useAppSelector((state) => state.userStatus);

  const navigate = useNavigate();

  const getLatestArticles = async () => {
    const articles = await fetchLatestArticles();
    setLatestArticles(articles);
  };

  const getPremiumArticles = async () => {
    const articles = await fetchPremiumArticles();
    setPremiumArticles(articles);
  };

  const getAllArticles = async () => {
    if (premium) {
      const articles = await fetchAllArticles();
      setAllArticles(articles);
    } else {
      const articles = await fetchAllBasicArticles();
      setAllArticles(articles);
    }
  };

  useEffect(() => {
    getLatestArticles();
    getPremiumArticles();
    getAllArticles();

    if (!uid) {
      navigate("/login");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box minH="100vh" bg="#f6f8fd" pb="16">
      <UserDashboard />
      <ArticleLists
        title="Artikel Terbaru"
        subtitle="Terbaru dari kami"
        articleData={latestArticles}
      />
      <PremiumArticleList
        title="Artikel Premium"
        articleData={premiumArticles}
      />
      <ArticleLists
        title="Semua Artikel"
        subtitle="Menampilkan semua artikel"
        articleData={allArticles}
      />
    </Box>
  );
};

export default Explore;
