import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, ShoesPage, AddShoePage, NotFoundPage, ShoePage } from './pages';
import Layout from "./components/Layout/Layout";
import { AdminProvider } from "./context/CheckAdminContext";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'shoes',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ShoesPage />,
        },
        {
          path: 'shoes/:shoeId',
          element: <ShoePage />,
        },
        {
          path: 'add',
          element: <AddShoePage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);

  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;

