import * as contentful from 'contentful';

const SPACE_ID = 'ltdsnpgj9iu2';
const DELIVERY_TOKEN = '9Vs2hryoTWaBGGBV3Wk0nlWqZYXXrrljmzRznPbIzL8';
const PREVIEW_TOKEN = 'OBs1o3NHW99UqXMw2b0x6W-MihxOMogOeaY5zffNc8s';
const ENVIRONMENT = 'master';

export const useContentful = () => {
  // to consume published content (i.e. content in “Published” status)
  const deliveryAPI = contentful.createClient({
    space: SPACE_ID,
    accessToken: DELIVERY_TOKEN,
    environment: ENVIRONMENT,
  });
  // const response = await client.getEntries() console.log(response.items)
  deliveryAPI.getEntries({ content_type: 'notice' }).then((entries) => console.log('Published', entries));
  // deliveryAPI.getEntry('6NSydaqDQntTFPDBy6MTXy')
  //   .then((entry) => console.log('111', entry))
  //   .catch((err) => console.log('222', err));

  // to preview and consume unpublished content (i.e. content in “Draft” status)
  const previewAPI = contentful.createClient({
    space: SPACE_ID,
    accessToken: PREVIEW_TOKEN,
    environment: ENVIRONMENT,
    host: 'preview.contentful.com',
  });
  previewAPI.getEntries({ content_type: 'notice' }).then((entries) => console.log('Draft(maybe All?)', entries));
  // previewAPI.getEntry('1KS7JyLBTeNOe4FPevRwa6')
  //   .then((entry) => console.log('111', entry))
  //   .catch((err) => console.log('222', err));

  return { deliveryAPI, previewAPI };
};
