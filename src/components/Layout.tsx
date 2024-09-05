/** @format */

import './Layout.scss';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
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
    </div>
  );
};

export default Layout;
