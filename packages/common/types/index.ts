import { EntryFieldTypes } from 'contentful';

export interface ArticleType {
  id: number;
  title: string;
  body: string;
  thumbnail: URL;
  publishedAt: Date;
  user: string;
}

export interface NoticeType {
  id?: number;
  title: string;
  content: string;
  entryId: string;
  createdAt?: Date | string | `${number}-${number}-${number}T${number}:${number}:${number}Z`;
  updatedAt?: Date | string | `${number}-${number}-${number}T${number}:${number}:${number}Z`;
}
