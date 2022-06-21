import request from "graphql-request";
import { Article, Articles } from "types/article";

const contentAPI = process.env.REACT_APP_GRAPHCMS_CONTENT_API || "";

const fetchArticleBySlug = async (slug: string) => {
  const data = await request<Article>(
    contentAPI,
    `{
        article(where: {slug: "${slug}"}) {
            title
            slug
            coverImage {
              url
            }
            category
            articleType
            excerpt
            content {
              markdown
            }
            createdAt
            updatedAt
        }
    }`
  );

  return data.article;
};

const fetchArticlesByCategory = async (category: string) => {
  const data = await request<Articles>(
    contentAPI,
    `{
        articles(where: {category: "${category}"}) {
          title
          slug
          coverImage {
            url
          }
          category
          articleType
          excerpt
          createdAt
          updatedAt
        }
    }`
  );

  return data.articles;
};

const fetchLatestArticles = async () => {
  const data = await request<Articles>(
    contentAPI,
    `{
        articles(orderBy: createdAt_DESC) {
          title
          slug
          coverImage {
            url
          }
          category
          articleType
          excerpt
          createdAt
          updatedAt
        }
    }`
  );

  return data.articles;
};

const fetchPremiumArticles = async () => {
  const data = await request<Articles>(
    contentAPI,
    `{
        articles(where: {articleType: "premium"}) {
          title
          slug
          coverImage {
            url
          }
          category
          articleType
          excerpt
          createdAt
          updatedAt
        }
    }`
  );

  return data.articles;
};

export {
  fetchArticleBySlug,
  fetchArticlesByCategory,
  fetchLatestArticles,
  fetchPremiumArticles,
};
