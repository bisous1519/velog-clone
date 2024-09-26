export interface ArticleType {
  id: number;
  title: string;
  body: string;
  thumbnail: URL;
  publishedAt: Date;
  user: string;
}
