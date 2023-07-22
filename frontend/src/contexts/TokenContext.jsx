// Import packages
import { createContext, useState, useMemo } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const TokenContext = createContext();

export default TokenContext;

export function TokenContextProvider({ children }) {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userRole, setUserRole] = useState(Cookies.get("userRole") || null);
  const setUserCookie = (token, role) => {
    if (token) {
      Cookies.set("userToken", token, {
        expires: 1 / 24,
      });
      Cookies.set("userRole", role, {
        expires: 1 / 24,
      });
      setUserToken(token);
      setUserRole(role);
    } else {
      Cookies.remove("userRole");
      Cookies.remove("userToken");
      setUserToken(null);
      setUserRole(null);
    }
  };
  const TokenContextValue = useMemo(() => {
    return { userToken, userRole, setUserCookie };
  });

  return (
    <TokenContext.Provider value={TokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

TokenContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
