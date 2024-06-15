import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, ShoesPage, AddShoePage, NotFoundPage, ShoePage, EditPage } from './pages';
import Layout from "./components/Layout/Layout";
import { AdminProvider } from "./context/CheckAdminContext";
import { FetchShoesProvider } from "./context/FetchShoesContext";



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
          path: ':shoeId',
          element: <ShoePage />,
        },
        {
          path: 'add',
          element: <AddShoePage />,
        },
        {
          path: ':shoeId/edit', 
          element: <EditPage />,
        }
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);

  return (
    <AdminProvider>
      <FetchShoesProvider>
        <RouterProvider router={router} />
      </FetchShoesProvider>
    </AdminProvider>
  );
}

export default App;

