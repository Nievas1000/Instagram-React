import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedSesionsRoute from "./components/ProtectedSesionsRoute";
import useAutoLogin from "./hooks/useAutoLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const App = () => {
  useAutoLogin();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={
            <ProtectedSesionsRoute>
              <Register />
            </ProtectedSesionsRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedSesionsRoute>
              <Login />
            </ProtectedSesionsRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
