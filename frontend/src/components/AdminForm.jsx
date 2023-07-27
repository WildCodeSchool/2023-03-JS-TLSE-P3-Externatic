import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Import des packages
import axios from "axios";

// Import context
import TokenContext from "../contexts/TokenContext";
import PasswordVisibilityContext from "../contexts/PasswordVisibilityContext";

// Import des components
import TogglePasswordVisibility from "./TogglePasswordVisibility";
import ToggleConfirmedPasswordVisibility from "./ToggleConfirmedPasswordVisibility";
import ToggleNewPasswordVisibility from "./ToggleNewPasswordVisibility";

// Import des images
import identificationBlack from "../assets/icons/identification_black.svg";
import mailBlack from "../assets/icons/mail_black.svg";
import lockBlack from "../assets/icons/lock_black.svg";

function AdminForm() {
  const { userToken, setUserCookie } = useContext(TokenContext);
  const {
    showPassword,
    setShowPassword,
    showConfirmedPassword,
    setShowConfirmedPassword,
    showNewPassword,
    setNewShowPassword,
  } = useContext(PasswordVisibilityContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/admins`,
        {
          firstname,
          lastname,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 204) {
          Swal.fire({
            icon: "success",
            text: "Les modifications ont bien été prises en compte",
            width: 300,
            buttonsStyling: false,
            iconColor: "#eac1cc",
            customClass: {
              confirmButton: "button",
            },
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          width: 300,
          buttonsStyling: false,
          iconColor: "#ca2061cc",
          customClass: {
            confirmButton: "button",
          },
        });
      });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/admins/password`,
        {
          password: oldPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 204) {
          Swal.fire({
            icon: "success",
            text: "Le mot de passe a bien été modifié",
            width: 300,
            buttonsStyling: false,
            iconColor: "#eac1cc",
            customClass: {
              confirmButton: "button",
            },
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          width: 300,
          buttonsStyling: false,
          iconColor: "#ca2061cc",
          customClass: {
            confirmButton: "button",
          },
        });
      });
  };

  const getUserInfos = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admin`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((results) => {
        setFirstname(results.data[0].firstname);
        setLastname(results.data[0].lastname);
        setEmail(results.data[0].email);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          width: 300,
          buttonsStyling: false,
          iconColor: "#ca2061cc",
          customClass: {
            confirmButton: "button",
          },
        });
      });
  };

  const deleteAccount = () => {
    Swal.fire({
      title: "Etes-vous sûr de vouloir supprimer votre compte?",
      text: "Cette suppression est irréversible !",
      icon: "warning",
      iconColor: "#ca2061",
      showCancelButton: true,
      confirmButtonColor: "#ca2061",
      cancelButtonColor: "black",
      confirmButtonText: "Supprimer ce compte",
      cancelButtonText: "Annuler",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/admin`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((res) => {
            if (res.status === 204) {
              setUserCookie();
              Swal.fire({
                icon: "success",
                text: "Votre compte a bien été supprimé",
                width: 300,
                buttonsStyling: false,
                iconColor: "#eac1cc",
                customClass: {
                  confirmButton: "button",
                },
              });
              navigate("/");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              icon: "error",
              text: err.response.data.error,
              width: 300,
              buttonsStyling: false,
              iconColor: "#ca2061cc",
              customClass: {
                confirmButton: "button",
              },
            });
          });
      }
    });
  };

  useEffect(() => {
    getUserInfos();
    setShowPassword(false);
    setShowConfirmedPassword(false);
    setNewShowPassword(false);
  }, []);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h2>Modifier mon profil</h2>
        <div className="containerTextInput">
          <img className="iconForm" src={identificationBlack} alt="person" />
          <input
            type="text"
            placeholder="Nom"
            name="nom"
            className="textInput"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        <div className="containerTextInput">
          <img className="iconForm" src={identificationBlack} alt="person" />
          <input
            type="text"
            placeholder="Prénom"
            name="prenom"
            className="textInput"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={mailBlack} alt="person" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="textInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">
          Enregistrer les modifications
        </button>
      </form>
      <form onSubmit={handleChangePassword} className="form">
        <h2>Modifier mon mot de passe</h2>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Ancien mot de passe"
            name="ancienMdp"
            className="textInput"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <TogglePasswordVisibility />
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="Nouveau mot de passe"
            name="nouveauMdp"
            className="textInput"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <ToggleNewPasswordVisibility />
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type={showConfirmedPassword ? "text" : "password"}
            placeholder="Confirmer mot de passe"
            name="newMdp"
            className="textInput"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
          <ToggleConfirmedPasswordVisibility />
        </div>

        <button type="submit" className="button">
          Modifier mon mot de passe
        </button>
      </form>
      <button
        type="button"
        onClick={() => deleteAccount()}
        className="button reverseButton"
      >
        Supprimer mon compte
      </button>
    </div>
  );
}

export default AdminForm;
