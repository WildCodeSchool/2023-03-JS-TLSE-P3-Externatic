import loading from "../assets/images/loading.png";

function IsLoading() {
  return (
    <div className="containerError">
      <img className="imageError" src={loading} alt="Is loading" />
    </div>
  );
}

export default IsLoading;
