import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayoutLayout from "./layout/RootLayout.layout";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/Intro";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <RootLayoutLayout>
      <IntroPage />
    </RootLayoutLayout>
    ,
  },
  {
    path: "/home",
    element: 
    <RootLayoutLayout>
      <HomePage />
    </RootLayoutLayout>
    ,
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App