import React from "react";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <div>404 not found</div>,
  },
]);

function App() {
  return (
    <div className="App min-h-screen flex items-center">
      <div className="absolute beka -z-10 w-full h-min-screen top-0 left-0 right-0 bottom-0"></div>
      <div className="absolute fatass -z-20 w-full h-min-screen top-0 left-0 right-0 bottom-0"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
