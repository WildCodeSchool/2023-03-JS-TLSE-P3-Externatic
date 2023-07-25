import PropTypes from "prop-types";
import error401 from "../assets/images/unauthorized_error401.png";

function Error401Unauthorized({ message }) {
  return (
    <div className="containerError">
      <h2>{message}</h2>
      <img className="imageError" src={error401} alt="No data" />
    </div>
  );
}

export default Error401Unauthorized;

Error401Unauthorized.propTypes = {
  message: PropTypes.string.isRequired,
};
