import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Solicitudes from "./Solicitudes";

const Admin = () => {
  const navegate = useNavigate();
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("Usuario Existente");
      setUser(auth.currentUser);
    } else {
      console.log("Usuario no encontrado");
      navegate("/login");
    }
  }, [navegate]);
  return <div>{user && <Solicitudes user={user} />}</div>;
};

export default Admin;
