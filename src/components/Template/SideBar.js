import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/st-dunstan.jpg`} alt="" />
      </Link>
      <header>
        <h2>St. Dunstan’s Academy</h2>
        <p>Vitam Abuntantius Habere</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        A boys’ boarding school in the country, centered around a parish mission church, operating
        as a small village with a functioning farm...
      </p>
      <ul className="actions">
        <li>
          <Link to="/prospectus" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">
        &copy; St. Dunstan’s Academy <Link to="/">stdunstansacademy.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
