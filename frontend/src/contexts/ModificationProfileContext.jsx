import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ModificationProfileContext = createContext();

export default ModificationProfileContext;

export function ModificationProfileContextProvider({ children }) {
  const [editingInputs, setEditingInputs] = useState(false);

  const ModificationProfileContextValue = useMemo(() => {
    return { editingInputs, setEditingInputs };
  }, [editingInputs, setEditingInputs]);
  return (
    <ModificationProfileContext.Provider
      value={ModificationProfileContextValue}
    >
      {children}
    </ModificationProfileContext.Provider>
  );
}

ModificationProfileContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
