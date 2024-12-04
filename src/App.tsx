import React from "react";
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomCursor from "./components/ui/cursor";
import RootLayoutLayout from "./layout/RootLayout.layout";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/Intro";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/ProtectedRoute/authRoute";
import TopicsPage from "./pages/Topics";
import Topic5Page from "./pages/Topics/topic5";
import Topic6Page from "./pages/Topics/topic6";
import DedicatoryPage from "./pages/Dedicatory";
import Topic1Page from "./pages/Topics/topic1";
import Topic2Page from "./pages/Topics/topic2";
import Topic3Page from "./pages/Topics/topic3";
import Topic4Page from "./pages/Topics/topic4";
import Topic7Page from "./pages/Topics/topic7";
import Topic8Page from "./pages/Topics/topic8";
import Topic9Page from "./pages/Topics/topic9";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ProtectedRoute><IntroPage /></ProtectedRoute>} />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <HomePage />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topics"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <TopicsPage />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/1"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic1Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/2"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic2Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/3"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic3Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/4"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic4Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/5"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic5Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/6"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic6Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/7"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic7Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/8"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic8Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic/9"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <Topic9Page />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dedicatory"
          element={
            <ProtectedRoute>
              <RootLayoutLayout>
                <DedicatoryPage />
              </RootLayoutLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AnimatedRoutes />
      </Router>
      <CustomCursor />
    </Provider>
  );
};

export default App;
