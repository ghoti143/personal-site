import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael D'Angelo via email @ michael.l.dangelo@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div>
        <iframe
          title="contact"
          src="https://docs.google.com/forms/d/e/1FAIpQLScQfSXNKzjUCV2ik7tRLuj6G9KYcjE_RZ2Wyj0gX_Rz0jM1FQ/viewform?embedded=true"
          width="100%"
          height="1100"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </article>
  </Main>
);

export default Contact;
