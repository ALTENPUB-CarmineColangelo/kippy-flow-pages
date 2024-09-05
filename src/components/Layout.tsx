/** @format */

import './Layout.scss';
import { PropsWithChildren } from 'react';
import {useTranslation} from 'react-i18next';

const Layout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  return (
    <div className="layout">
      <header className="header page-container">
        <nav className="navbar container">
          <a className="navbar-brand" href="/it">
            <picture>
              <source type="image/webp" srcSet="https://d33ko0jf8f2gvx.cloudfront.net/images/common/logo_kippy.webp" />
              <img src="https://d33ko0jf8f2gvx.cloudfront.net/images/common/logo_kippy.png" width="88" height="34" alt="Kippy" />
            </picture>
          </a>
        </nav>
      </header>
      {children}
      <footer className="footer page-container">
        <div className="container">
          <div className="row" >
            <p className="disclaimer text-white">
              {t('footer.disclaimer')}
            </p></div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
