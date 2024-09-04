/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { ResourcesConfig } from '@aws-amplify/core';
import './i18n/i18n';

Amplify.configure(awsconfig as ResourcesConfig);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
