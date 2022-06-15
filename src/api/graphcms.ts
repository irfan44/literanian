import request from "graphql-request";

const contentAPI = process.env.REACT_APP_GRAPHCMS_CONTENT_API || "";

const fetchArticleByCategory = async (category: string) => {
  const data = await request(
    contentAPI,
    `{
        articles(where: {kategori: "${category}"}) {
            judul
            slug
            ringkasan
            kategori
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
            judul
            kategori
            isi {
                html
            }
        }
    }`
  );

  return data.article;
};

export { fetchArticleByCategory, fetchArticleBySlug };
