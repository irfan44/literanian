import { Box } from "@chakra-ui/react";
import CategorySection from "components/pages/home/CategorySection";
import HeroSection from "components/pages/home/HeroSection";
import RecommendedArticleSection from "components/pages/home/RecommendedArticleSection";

const Home = () => {
  return (
    <Box minH="100vh">
      <HeroSection />
      <RecommendedArticleSection />
      <CategorySection />
    </Box>
  );
};

export default Home;
