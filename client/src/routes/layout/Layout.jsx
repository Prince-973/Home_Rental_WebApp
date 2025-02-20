import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Layout.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  // Redirect to /login if no currentUser
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Render authenticated layout
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout, RequireAuth };
