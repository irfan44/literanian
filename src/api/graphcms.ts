import request from "graphql-request";

const contentAPI = process.env.REACT_APP_GRAPHCMS_CONTENT_API || "";

const fetchArticleByCategory = async (category: string) => {
  const data = await request(
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
        }
    }`
  );

  return data.articles;
};

const fetchArticleBySlug = async (slug: string) => {
  const data = await request(
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
              html
            }
            createdAt
            updatedAt
        }
    }`
  );

  return data.article;
};

const fetchPremiumArticle = async () => {
  const data = await request(
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
        }
    }`
  );

  return data.articles;
};

const fetchLatestArticle = async () => {
  const data = await request(
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
        }
    }`
  );

  return data.articles;
};

export {
  fetchArticleByCategory,
  fetchArticleBySlug,
  fetchPremiumArticle,
  fetchLatestArticle,
};
