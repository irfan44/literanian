import { Box } from "@chakra-ui/react";
import BoostProductivitySection from "components/pages/home/BoostProductivity";
import CategorySection from "components/pages/home/CategorySection";
import HeroSection from "components/pages/home/HeroSection";
import KeunggulanSection from "components/pages/home/Keunggulan";
import RecommendedArticleSection from "components/pages/home/RecommendedArticleSection";

const Home = () => {
  return (
    <Box minH="100vh" bg="#f6f8fd">
      <HeroSection />
      <RecommendedArticleSection />
      <Box bg="">
        <CategorySection />
      </Box>
      <KeunggulanSection />
      <BoostProductivitySection />
    </Box>
  );
};

export default Home;
