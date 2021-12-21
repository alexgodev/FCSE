import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/Fallback';

ReactDOM.render(
    <ErrorBoundary FallbackComponent={Fallback}>
        <App />,
    </ErrorBoundary>,
    document.getElementById('app'),
);
