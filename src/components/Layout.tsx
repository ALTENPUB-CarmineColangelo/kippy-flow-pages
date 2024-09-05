/** @format */

import './Layout.scss';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
// @ts-ignore
import logo from '../assets/logo_kippy.webp';

const Layout = () => {
  const { i18n } = useTranslation();
  const path = 'https://kippy.eu/' + i18n.language;

  return (
    <div className="layout">
      <header className="header page-container">
        <nav className="navbar container">
          <a className="navbar-brand" href={path}>
            <picture>
              <img src={logo} width="88" height="34" alt="Kippy" />
            </picture>
          </a>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
