import { createContext, useMemo } from "react";
import PropTypes from "prop-types";

const MessagesErrorContext = createContext();

export default MessagesErrorContext;

export function MessagesErrorContextProvider({ children }) {
  const messages = {
    notFound: "Oups, il semble que la page demandée n'ait pas été trouvée",
    favorites: "Il semble que vous n'avez aucune offre en favoris",
    unauthorized:
      "Oups, il semble que vous n'êtes pas autorisé a consulter la page demandée",
    result: "Oups, il semble qu'il n'y ait pas de résultats",
  };
  const MessagesErrorContextValue = useMemo(() => {
    return { messages };
  });
  return (
    <MessagesErrorContext.Provider value={MessagesErrorContextValue}>
      {children}
    </MessagesErrorContext.Provider>
  );
}

MessagesErrorContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
