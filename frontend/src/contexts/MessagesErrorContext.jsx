import { createContext, useMemo } from "react";
import PropTypes from "prop-types";

const MessagesErrorContext = createContext();

export default MessagesErrorContext;

export function MessagesErrorContextProvider({ children }) {
  const messages = {
    notFound: "Oups, la page demandée n'a pas été trouvée",
    favorites: "Vous n'avez aucune offre en favoris",
    unauthorized: "Vous n'êtes pas autorisé a consulter la page demandée",
    result: "Oups, il semble qu'il n'y ait pas de résultats",
    offers: "Vous n'avez aucune offre en cours",
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
