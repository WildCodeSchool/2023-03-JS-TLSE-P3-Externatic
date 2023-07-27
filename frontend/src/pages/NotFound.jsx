import { useContext } from "react";
import MessagesErrorContext from "../contexts/MessagesErrorContext";

import Error404 from "../components/Error404";

function NotFound() {
  const { messages } = useContext(MessagesErrorContext);
  return <Error404 message={messages.notExist} />;
}
export default NotFound;
