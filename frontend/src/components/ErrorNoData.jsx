import PropTypes from "prop-types";
import noData from "../assets/images/no_data.png";

function ErrorNoData({ message }) {
  return (
    <div className="containerError">
      <h2>{message}</h2>
      <img className="imageError" src={noData} alt="No data" />
    </div>
  );
}

export default ErrorNoData;

ErrorNoData.propTypes = {
  message: PropTypes.string.isRequired,
};
