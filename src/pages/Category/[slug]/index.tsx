import { fetchArticlesByCategory } from "api/graphcms";
import ArticleCard from "components/ArticleCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { ArticleData } from "types/article";

const CategoryArticles = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const { uid } = useAppSelector((state) => state.userProfile);
  const { slug } = useParams();
  const navigate = useNavigate();

  const getArticles = async () => {
    if (slug) {
      try {
        const articles = await fetchArticlesByCategory(slug);
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getArticles();
    if (!uid) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {articles.map((article) => {
        return <ArticleCard key={article.slug} {...article} />;
      })}
    </>
  );
};

export default CategoryArticles;
