import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './core/App';
import './index.scss';


render(<BrowserRouter basename='/' >
    <App />
</BrowserRouter>, document.getElementById('root'));