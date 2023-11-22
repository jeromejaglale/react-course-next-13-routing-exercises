import React from 'react';
import ToastProvider from '../../../components/ToastProvider';
import ToastShelf from '../../../components/ToastShelf';

import './styles.css';

function FlashMsgLayout({ children }) {
  return (
  	<ToastProvider>
    <html lang="en">
      <body>
      	{children}
      	<ToastShelf />
      </body>
    </html>
     </ToastProvider>
  );
}

export default FlashMsgLayout;
