import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './components/App';
import configureStore from './redux/configureStore';
import { GlobalStyle } from '../src/Styles/global';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
