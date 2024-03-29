import { Redirect } from "react-router-dom";

export const ProtectedPage = ({ children }) => {
  return localStorage.getItem("token") ? (
    <>{children}</>
  ) : (
    <Redirect
      to={{
        pathname: "/signIn",
        state: { referrer: "" },
      }}
    />
  );
};
