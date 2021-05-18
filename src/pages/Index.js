import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">St. Dunstan’s Academy</Link>
          </h2>
          <p>Vitam Abuntantius Habere</p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to the St. Dustan’s Academy website. Please feel free to read about our{' '}
        <Link to="/mission">mission</Link>, or you can check out our{' '}
        <Link to="/prospectus">prospectus</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
