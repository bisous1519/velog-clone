import { faker } from '@faker-js/faker';
import { ArticleType } from './type';

const articles:ArticleType[] = new Array(50).fill(null).map((_, idx) => {
  const id = idx;
  const title = faker.word.words({ count: { min: 1, max: 10 } });
  const body = faker.word.words({ count: { min: 10, max: 50 } });
  const thumbnail = faker.image.urlPicsumPhotos() as unknown as URL;
  const publishedAt = faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2024-09-26T00:00:00.000Z' });
  return {
    id, body, publishedAt, thumbnail, title,
  };
});

export const getArticle = (nth : number): ArticleType => articles[nth];

export const getArticles = ():ArticleType[] => articles;
