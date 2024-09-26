import { faker } from '@faker-js/faker';
import { ArticleType } from '../types';

const articles:ArticleType[] = new Array(23).fill(null).map((_, idx) => {
  const id = idx;
  const title = faker.word.words({ count: { min: 1, max: 7 } });
  const body = faker.word.words({ count: { min: 3, max: 50 } });
  const thumbnail = faker.image.urlPicsumPhotos() as unknown as URL;
  const publishedAt = faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2024-09-26T00:00:00.000Z' });
  const user = faker.person.firstName();
  return {
    id, body, publishedAt, thumbnail, title, user,
  };
});

export const getArticle = (nth : number): ArticleType => articles[nth];

export const getArticles = ():ArticleType[] => articles;
