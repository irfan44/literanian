import { Box } from "@chakra-ui/react";
import { fetchLatestArticles, fetchPremiumArticles } from "api/graphcms";
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

  const { uid } = useAppSelector((state) => state.userProfile);

  const navigate = useNavigate();

  const getLatestArticle = async () => {
    const articles = await fetchLatestArticles();
    setLatestArticles(articles);
  };

  const getPremiumArticle = async () => {
    const articles = await fetchPremiumArticles();
    setPremiumArticles(articles);
  };

  useEffect(() => {
    getLatestArticle();
    getPremiumArticle();
    if (!uid) {
      navigate("/login");
    }
  }, []);

  return (
    <Box minH="100vh">
      <Box bg="blue.100">
        <UserDashboard />
      </Box>
      <ArticleLists title="Artikel Terbaru" articleData={latestArticles} />
      <PremiumArticleList
        title="Artikel Premium"
        articleData={premiumArticles}
      />
    </Box>
  );
};

export default Explore;
