import { Link } from 'react-router-dom';

import './Footer.scss';

import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <nav className="footer__navbar">
            <ul className="footer__list">
              <li className="footer__list_item">
                <Link to="/" className="footer__list_link">
                  Agreement
                </Link>
              </li>

              <li className="footer__list_item">
                <Link to="/" className="footer__list_link">
                  Privacy
                </Link>
              </li>

              <li className="footer__list_item">
                <Link to="/" className="footer__list_link">
                  For copyright holders
                </Link>
              </li>
            </ul>
          </nav>
          <div className="name_project">
            <span className="name_project__text">AnimeLET.org 2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
