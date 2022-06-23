import { RichTextContent } from "@graphcms/rich-text-types";

export interface ArticleData {
  title: string;
  slug: string;
  coverImage: {
    url: string;
  };
  category: string;
  articleType: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleContent extends ArticleData {
  content: { raw: RichTextContent };
}

export interface Article {
  article: ArticleContent;
}

export interface Articles {
  articles: ArticleData[];
}
