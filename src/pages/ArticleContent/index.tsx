import { Heading } from "@chakra-ui/react";
import { fetchArticleBySlug } from "api/graphcms";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ArticleContent} from "types/article";
import ReactMarkdown from "react-markdown";

const ContentArticle = () => {
  const [article, setArticle] = useState<ArticleContent>();
  const { slug } = useParams();

  const getArticleContent = async () => {
    if (slug) {
      try {
        const article = await fetchArticleBySlug(slug);
        setArticle(article);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getArticleContent();
    console.log(slug);
  }, []);

  const markdown = article &&
  article.content.markdown.replace(/\n/g, `<br>`);

  return (
    <>
      {article && markdown && (
        <>
          <Heading>{article.title}</Heading>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </>
      )}
    </>
  );
};

export default ContentArticle;
