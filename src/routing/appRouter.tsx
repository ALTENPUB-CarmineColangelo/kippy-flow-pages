/** @format */
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import VerifyEmailPage from '../pages/VerifyEmailPage/VerifyEmailPage';
import LanguageProvider from '../i18n/LanguageProvider';
import { getMockSelectedUserSearchParams } from '../mocks/users';

export const appRouter = createBrowserRouter([
  {
    path: '',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Navigate to={`en/verify-email?${getMockSelectedUserSearchParams()}`} />,
      },
      {
        path: ':languageCode',
        element: <LanguageProvider />,
        children: [
          {
            index: true,
            element: <Navigate to={`verify-email?${getMockSelectedUserSearchParams()}`} />,
          },
          {
            path: 'verify-email',
            element: <VerifyEmailPage />,
          },
          {},
        ],
      },
    ],
  },
  {},
]);
