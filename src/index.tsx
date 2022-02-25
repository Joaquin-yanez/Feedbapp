import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// This file is the entry point of react.
// Strict mode adds more checking and warnings for the app.
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
