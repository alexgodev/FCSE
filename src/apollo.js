import React from 'react';
import { onError } from '@apollo/client/link/error';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    ApolloLink,
    Observable,
} from '@apollo/client';
import { AUTH_TOKEN, SERVER_URL } from './constants';

const cache = new InMemoryCache({});

const request = (operation) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
        },
    });
};

export const requestLink = new ApolloLink(
    (operation, forward) =>
        new Observable((observer) => {
            let handle;
            Promise.resolve(operation)
                .then((oper) => request(oper))
                .then(() => {
                    handle = forward(operation).subscribe({
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer),
                    });
                })
                .catch(observer.error.bind(observer));

            return () => {
                if (handle) handle.unsubscribe();
            };
        }),
);

const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            console.log('[graphQLErrors]', graphQLErrors);
        }
        if (networkError) {
            console.log('[networkError]', networkError);
        }
    }),
    requestLink,
    new HttpLink({
        uri: SERVER_URL,
    }),
]);

const client = new ApolloClient({ link, cache });

const Apollo = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;

export default Apollo;
