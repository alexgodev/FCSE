import gql from 'graphql-tag';

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(input: { identifier: $email, password: $password }) {
            jwt
            user {
                id
            }
        }
    }
`;

const GET_USER_INFO = gql`
    query user($id: ID!) {
        user(id: $id) {
            firstName
            lastName
        }
    }
`;

export { GET_USER_INFO, LOGIN_USER };
