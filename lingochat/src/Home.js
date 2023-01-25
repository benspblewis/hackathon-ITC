import React, { useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios";


Modal.setAppElement("*");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function ModalSignUp() {
  // Modal Functions
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conPassword: "",
    number: "",
    admin: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //Create Login Functions
  // const { registerInfo, setRegisterInfo } = useContext(PetContext);
  const handleRegisterInfo = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRegistered = {
        firstName: registerInfo.firstName,
        lastName: registerInfo.lastName,
        email: registerInfo.email,
        password: registerInfo.password,
        conPassword: registerInfo.conPassword,
        number: registerInfo.number,
        admin: registerInfo.admin,
      };
      const res = await axios.post(
        `http://localhost:8000/users/signup`,
        userRegistered
      );
      alert(res.data.message);
      if (res.data.user) {
        setIsOpen(false);
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  return (
    <div>
      <button className="modalSignbtn centerSignupBtn" onClick={openModal}>
        Sign Up and Rescue
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modalForm"
      >
        <div className="modalTop">
          <label>Sign up to LingoChat</label>
          <button onClick={closeModal} className="closeModal">
            X
          </button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="firstLastName">
            <input
              className="firstName"
              placeholder="first name"
              type="name"
              onChange={handleRegisterInfo}
              value={registerInfo.firstName}
              name="firstName"
              id="firstName"
              required
            />
            <input
              className="lastName"
              placeholder="last name"
              type="name"
              onChange={handleRegisterInfo}
              value={registerInfo.lastName}
              name="lastName"
              id="lastName"
              required
            />
          </div>
          <input
            placeholder="email"
            type="email"
            className="inputLogin"
            onChange={handleRegisterInfo}
            value={registerInfo.email}
            name="email"
            id="email"
            required
          />
          <input
            placeholder="password"
            type="password"
            className="inputLogin"
            onChange={handleRegisterInfo}
            value={registerInfo.password}
            name="password"
            id="password"
            required
          />
          <input
            placeholder="confirm password"
            type="password"
            className="inputLogin"
            onChange={handleRegisterInfo}
            value={registerInfo.conPassword}
            name="conPassword"
            id="conPassword"
            required
          />
          <input
            placeholder="phone number"
            type="tel"
            className="inputLogin"
            onChange={handleRegisterInfo}
            value={registerInfo.number}
            name="number"
            id="number"
            required
          />
          <select
            className="inputLogin"
            onChange={handleRegisterInfo}
            value={registerInfo.admin}
            name="admin"
            id="admin"
            required
            style={{ width: "100%" }}
          >
            <option>Admin?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <button className="modalSignbtn" type="submit">
            Create Account!
          </button>
        </form>
      </Modal>
    </div>
  );
}