import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

/** Theme : color guide
  ---> main color : background;
  ---> second color { title, border, btnBackground, searchLabelUnderline, errorMsg, contactName, deleteContactBtnHoverAndFocus }
  ---> third color { label, searchBorder, errorMsgUnderline, contactNumber, deleteContactBtn }
  ---> hover & focus color : hoverAndFocus;
**/

const theme = {
  main: 'black',
  second: 'blanchedalmond',
  third: 'aqua',
  hovAndFoc: 'darkcyan',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
