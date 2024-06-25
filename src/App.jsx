import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, ShoesPage, AddShoePage, NotFoundPage, ShoePage, EditPage, ContactPage, CartPage, PanelPage } from './pages';
import { Layout } from "./components";

import { AdminProvider } from "./context/CheckAdminContext";
import { FetchShoesProvider } from "./context/FetchShoesContext";
import { FetchUsersProvider } from "./context/FetchUsersContext";
import { CartProvider } from "./context/CartContext";




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
        },
        {
          path: 'panel',
          element: <PanelPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'cart',
          element: <CartPage />,
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
        <FetchUsersProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </FetchUsersProvider>
      </FetchShoesProvider>
    </AdminProvider>
  );
}

export default App;

