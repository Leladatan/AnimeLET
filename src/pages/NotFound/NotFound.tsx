import React, { FC } from 'react';

import './NotFound.scss';

const NotFoundPage: FC = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <h2 className="error-message">NotFound</h2>
          <p className="error-info">Please go to the main page to continue...</p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
