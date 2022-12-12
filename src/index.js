import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';
import './assets/fonts/fonts.css';
import { theme } from 'utility/theme';
import GlobalStyle from 'utility/globalStyles';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter basename="/petly-front">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
