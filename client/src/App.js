import React from "react";

/* ROUTES */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* CSS FILE AND SEMANTIC UI */
import "semantic-ui-css/semantic.min.css";

/* COMPONENTS */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MenuBar from "./components/MenuBar";

/* Provider */
import { AuthProvider } from "./context/auth";
import { PrivateRoute } from "./util/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="ui container">
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact element={<PrivateRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
