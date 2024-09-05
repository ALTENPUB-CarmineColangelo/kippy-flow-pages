/** @format */

import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import logo from '../assets/logo_kippy.webp';

const Layout = () => {
  const { i18n, t } = useTranslation();
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
      <main>
        <Outlet />
      </main>
      <footer className="footer page-container">
        <div className="container">
          <div className="row">
            <p className="disclaimer text-white">{t('footer.disclaimer')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
