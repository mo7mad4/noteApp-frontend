import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage";

const PrivateRoute = ({ children }) => {
    const { auth } = useSelector(
        (state) => state.userReducer
      );

  if (auth) {
    return children
  }
  return <LoginPage />;
};

export default PrivateRoute;
