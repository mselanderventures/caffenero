import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
    mutation ($input: UpdateUserInput!) {
        updateUser(input: $input) {
            user {
                email
            }
        }
    }
`;
