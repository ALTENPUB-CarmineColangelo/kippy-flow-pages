/** @format */

import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routing/appRouter';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <RouterProvider router={appRouter} />
    </Layout>
  );
}

export default App;
