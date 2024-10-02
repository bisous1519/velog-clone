import * as contentful from 'contentful';
import { NoticeType } from '@repo/common/type';

const SPACE_ID = 'ltdsnpgj9iu2';
const DELIVERY_TOKEN = '9Vs2hryoTWaBGGBV3Wk0nlWqZYXXrrljmzRznPbIzL8';
const PREVIEW_TOKEN = 'OBs1o3NHW99UqXMw2b0x6W-MihxOMogOeaY5zffNc8s';
const ENVIRONMENT = 'master';

export type NoticeEntrySkeleton = {
  contentTypeId: 'notice',
  fields: NoticeType,
};

// to consume published content (i.e. content in “Published” status)
export const getPublishedEntries = async () => {
  const deliveryAPI = contentful.createClient({
    space: SPACE_ID,
    accessToken: DELIVERY_TOKEN,
    environment: ENVIRONMENT,
  });
  const publishedEntries = await deliveryAPI.getEntries<NoticeEntrySkeleton>({ content_type: 'notice' });
  return publishedEntries.items || [];
};

// to preview and consume unpublished content (i.e. content in “Draft” status)
export const getAllEntries = async () => {
  const previewAPI = contentful.createClient({
    space: SPACE_ID,
    accessToken: PREVIEW_TOKEN,
    environment: ENVIRONMENT,
    host: 'preview.contentful.com',
  });
  const allEntries = await previewAPI.getEntries<NoticeEntrySkeleton>({ content_type: 'notice' });
  return allEntries.items || [];
};
