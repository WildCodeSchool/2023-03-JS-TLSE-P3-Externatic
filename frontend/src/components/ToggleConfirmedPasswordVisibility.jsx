import { useContext } from "react";
import PasswordVisibilityContext from "../contexts/PasswordVisibilityContext";

function ToggleConfirmedPasswordVisibility() {
  const { showConfirmedPassword, setShowConfirmedPassword } = useContext(
    PasswordVisibilityContext
  );

  return (
    <button
      aria-label="show or hide password"
      className={`passwordVisible ${
        showConfirmedPassword ? "eyeOpen" : "eyeClosed"
      }`}
      type="button"
      onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
    />
  );
}

export default ToggleConfirmedPasswordVisibility;
