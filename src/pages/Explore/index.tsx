import { Box } from "@chakra-ui/react";
import { fetchLatestArticles, fetchPremiumArticles } from "api/graphcms";
import ArticleLists from "components/pages/explore/ArticleList";
import PremiumArticleList from "components/pages/explore/PremiumArticleList";
import UserDashboard from "components/pages/explore/UserDashboard";
import { useEffect, useState } from "react";
import { ArticleData } from "types/article";

const Explore = () => {
  const [latestArticles, setLatestArticles] = useState<ArticleData[]>([]);
  const [premiumArticles, setPremiumArticles] = useState<ArticleData[]>([]);

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
