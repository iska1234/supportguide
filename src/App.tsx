import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayoutLayout from "./layout/RootLayout.layout";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/Intro";
import LoginPage from "./pages/Login";
import CustomCursor from "./components/ui/cursor";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/ProtectedRoute/authRoute";
import TopicsPage from "./pages/Topics";
import DedicatoryPage from "./pages/Dedicatory";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayoutLayout>
        <IntroPage />
      </RootLayoutLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthRoute>

      <RootLayoutLayout>
        <LoginPage />
      </RootLayoutLayout>
      </AuthRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <HomePage />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/topics",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <TopicsPage />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dedicatory",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <DedicatoryPage />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
]);

const App:React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <CustomCursor />
    </Provider>
  );
};

export default App;
