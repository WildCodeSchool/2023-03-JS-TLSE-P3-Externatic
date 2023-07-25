import PropTypes from "prop-types";
import error404 from "../assets/images/error_404.png";

function Error404({ message }) {
  return (
    <div className="containerError">
      <h2>{message}</h2>
      <img className="imageError" src={error404} alt="No data" />
    </div>
  );
}

export default Error404;

Error404.propTypes = {
  message: PropTypes.string.isRequired,
};
