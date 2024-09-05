/** @format */

const apiKey = process.env.REACT_APP_AMPLIFY_APIKEY;
const region = process.env.REACT_APP_AMPLIFY_REGION;
const defaultAuthMode = process.env.REACT_APP_AMPLIFY_DEFAULTAUTHMODE;

const APP_CODE = process.env.REACT_APP_AMPLIFY_ENDPOINT_CODE;

const awsconfig = {
  API: {
    GraphQL: {
      endpoint: `https://${APP_CODE}.appsync-api.eu-west-1.amazonaws.com/graphql`,
      region,
      defaultAuthMode,
      apiKey,
    },
  },
};

export default awsconfig;
