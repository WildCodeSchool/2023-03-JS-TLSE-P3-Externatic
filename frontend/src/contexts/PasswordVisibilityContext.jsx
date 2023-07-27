import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const PasswordVisibilityContext = createContext();

export default PasswordVisibilityContext;

export function PasswordVisibilityContextProvider({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  const PasswordVisibilityContextValue = useMemo(() => {
    return {
      showPassword,
      setShowPassword,
      showConfirmedPassword,
      setShowConfirmedPassword,
      showNewPassword,
      setNewShowPassword,
    };
  }, [showPassword, showConfirmedPassword, showNewPassword]);
  return (
    <PasswordVisibilityContext.Provider value={PasswordVisibilityContextValue}>
      {children}
    </PasswordVisibilityContext.Provider>
  );
}

PasswordVisibilityContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
