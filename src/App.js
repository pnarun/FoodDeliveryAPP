import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

// {
//   /** if path = / */
// }
// <Body />;
// {
//   /** if path = /about */
// }
// <About />;
// {
//   /** if path = /contactus */
// }
// <ContactUs />;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path : "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },

  // {
  //   path: "*",
  //   element: <Error />
  // }
]);

// Fetch root div from HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering React componet
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
