/** @format */

import gql from 'graphql-tag';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { generateClient } from 'aws-amplify/api';

const client = generateClient({
  authMode: 'apiKey',
});

export const VerifyEmailMutation = gql`
  mutation verifyEmail($email: String!, $token: String!) {
    verifyEmail(email: $email, token: $token) {
      code
      message
      translationCode
    }
  }
` as unknown as string;

export type VerifyEmailMutationVariables = {
  email: string;
  token: string;
};

export type VerifyEmailMutationResponse = {
  verifyEmail: {
    code: string;
    message: string;
    translationCode: string;
  };
};

export const useApiVerifyEmailMutation = () => {
  return (variables: VerifyEmailMutationVariables) =>
    client.graphql({
      query: VerifyEmailMutation,
      variables,
    }) as Promise<GraphQLResult<VerifyEmailMutationResponse>>;
};
