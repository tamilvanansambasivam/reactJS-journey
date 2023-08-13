import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorElement from "./components/utilities/ErrorElement";
import Contact from "./components/utilities/Contact";
import Cart from "./components/utilities/Cart";

const App = () => {
  return (
    <div className="app ">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
