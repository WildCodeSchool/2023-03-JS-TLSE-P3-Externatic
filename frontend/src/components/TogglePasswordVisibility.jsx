import { useContext } from "react";
import PasswordVisibilityContext from "../contexts/PasswordVisibilityContext";

function TogglePasswordVisibility() {
  const { showPassword, setShowPassword } = useContext(
    PasswordVisibilityContext
  );

  return (
    <button
      aria-label="show or hide password"
      className={`passwordVisible ${showPassword ? "eyeOpen" : "eyeClosed"}`}
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    />
  );
}

export default TogglePasswordVisibility;
