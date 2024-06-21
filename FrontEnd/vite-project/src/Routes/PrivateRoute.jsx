import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

function PrivateRoute() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (currentUser) {
      currentUser.getIdTokenResult().then((idTokenResult) => {
        setIsAdmin(!!idTokenResult.claims.admin); // https://stackoverflow.com/questions/39075142/javascript-undefined-gives-true
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>; // or a spinner   
  }

  if (!currentUser || !isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
