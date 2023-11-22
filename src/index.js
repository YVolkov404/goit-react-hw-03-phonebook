import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: 'black',
  title: 'blanchedalmond',
  label: 'aqua',
  border: 'blanchedalmond',
  hoverAndFocus: 'darkcyan',
  buttonBackground: 'blanchedalmond',
  searchBorder: 'aqua',
  searchLabelUnderline: 'blanchedalmond',
  errorMsg: 'blanchedalmond',
  errorMsgUnderline: 'aqua',
  contactName: 'blanchedalmond',
  contactNumber: 'aqua',
  deleteContactBtn: 'aqua',
  deleteContactBtnHoverAndFocus: 'blanchedalmond',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
