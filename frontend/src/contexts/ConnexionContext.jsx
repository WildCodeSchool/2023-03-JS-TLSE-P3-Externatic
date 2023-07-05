import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ConnexionContext = createContext();

export default ConnexionContext;

export function ConnexionContextProvider({ children }) {
  const [showForm, setShowForm] = useState(false);
  const ConnexionContextValue = useMemo(() => {
    return { showForm, setShowForm };
  });
  return (
    <ConnexionContext.Provider value={ConnexionContextValue}>
      {children}
    </ConnexionContext.Provider>
  );
}

ConnexionContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
