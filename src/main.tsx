import React from 'react';
import ReactDOM from 'react-dom/client';

import './firebase/config.js';
import { Provider } from './provider/Context.js';
import App from './App.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
