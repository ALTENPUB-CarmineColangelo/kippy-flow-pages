/** @format */

export const API_KEY = 'da2-23pdcxbzffd2xjyubn7t22dsja';
const APP_CODE = 'cmfkbxxb4jeuderfjcrrkubgmy';

const awsconfig = {
  API: {
    GraphQL: {
      endpoint: `https://${APP_CODE}.appsync-api.eu-west-1.amazonaws.com/graphql`,
      region: 'eu-west-1',
      defaultAuthMode: 'apiKey',
      apiKey: API_KEY,
    },
  },
};

export default awsconfig;
