import { useContext } from "react";
import PasswordVisibilityContext from "../contexts/PasswordVisibilityContext";

function ToggleNewPasswordVisibility() {
  const { showNewPassword, setNewShowPassword } = useContext(
    PasswordVisibilityContext
  );

  return (
    <button
      aria-label="show or hide password"
      className={`passwordVisible ${showNewPassword ? "eyeOpen" : "eyeClosed"}`}
      type="button"
      onClick={() => setNewShowPassword(!showNewPassword)}
    />
  );
}

export default ToggleNewPasswordVisibility;
