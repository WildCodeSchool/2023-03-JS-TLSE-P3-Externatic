import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

// Import des packages
import axios from "axios";

// Import context
import TokenContext from "../contexts/TokenContext";

// Import des images
import identificationBlack from "../assets/icons/identification_black.svg";
import mailBlack from "../assets/icons/mail_black.svg";
import lockBlack from "../assets/icons/lock_black.svg";

function AdminForm() {
  const { userToken } = useContext(TokenContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
            iconColor: "#ca2061",
            width: 300,
            confirmButtonColor: "black",
          });
        } else {
          Swal.fire({
            icon: "success",
            text: "Une erreur a été rencontrée",
            iconColor: "#ca2061",
            width: 300,
            confirmButtonColor: "black",
          });
        }
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
            iconColor: "#ca2061",
            width: 300,
            confirmButtonColor: "black",
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Swal.fire({
            icon: "error",
            text: "Le mot de passe est incorrect",
            iconColor: "#ca2061",
            width: 300,
            confirmButtonColor: "black",
          });
        } else if (err.response.status === 400) {
          Swal.fire({
            icon: "error",
            text: "Les deux mots de passe doivent être identiques",
            iconColor: "#ca2061",
            width: 300,
            confirmButtonColor: "black",
          });
        }
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
      });
  };

  useEffect(() => {
    getUserInfos();
  }, []);

  return (
    // id, firstname, lastname, email, password
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
            type="password"
            placeholder="Ancien mot de passe"
            name="ancienMdp"
            className="textInput"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            name="nouveauMdp"
            className="textInput"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="containerTextInput">
          <img className="iconForm" src={lockBlack} alt="lock" />
          <input
            type="password"
            placeholder="Confirmer mot de passe"
            name="newMdp"
            className="textInput"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button">
          Modifier mon mot de passe
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
