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
import Topic1Page from "./pages/Topics/topic1";
import Topic2Page from "./pages/Topics/topic2";
import Topic3Page from "./pages/Topics/topic3";
import Topic5Page from "./pages/Topics/topic5";
import Topic6Page from "./pages/Topics/topic6";
import Topic8Page from "./pages/Topics/topic8";
import Topic9Page from "./pages/Topics/topic9";
import Topic7Page from "./pages/Topics/topic7";
import Topic4Page from "./pages/Topics/topic4";
import SettingsPage from "./pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/login",
    element: (
      <AuthRoute>
        <LoginPage />
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
    path: "/settings",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <SettingsPage />
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
    path: "/topic/1",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <Topic1Page />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/topic/2",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <Topic2Page />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/topic/3",
    element: (

        <RootLayoutLayout>
          <Topic3Page />
        </RootLayoutLayout>
     
    ),
  },
  {
    path: "/topic/4",
    element: (
   
        <RootLayoutLayout>
          <Topic4Page />
        </RootLayoutLayout>
    
    ),
  },
  {
    path: "/topic/5",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <Topic5Page />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/topic/6",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <Topic6Page />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/topic/7",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <Topic7Page />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/topic/8",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <Topic8Page />
        </RootLayoutLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/topic/9",
    element: (
      <ProtectedRoute>
        <RootLayoutLayout>
          <Topic9Page />
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

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <CustomCursor />
    </Provider>
  );
};

export default App;
