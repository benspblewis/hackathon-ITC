import React, { useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios";
import logo from './images/logo.png'
import Login from "./login";

Modal.setAppElement("*");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};
export default function ModalSignUp() {
  const [formToShow,setFormToShow] = useState(null)
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    age: 0,
    gender: "",
    email: "",
    password: "",
    conPassword: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleRegisterInfo = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRegistered = {
        name: registerInfo.firstName,
        age: registerInfo.age,
        gender: registerInfo.gender,
        email: registerInfo.email,
        password: registerInfo.password,
        repassword: registerInfo.conPassword,
      };
      console.log(userRegistered);
      const res = await axios.post(`http://localhost:8080/user/signup`, userRegistered);
      if (res.data.ok) {
        console.log("signup response",res.data)
        setFormToShow("login");
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  function handleLoginClick(){
    setFormToShow("login")
    openModal()
  }
  function handleSignupClick(){
    setFormToShow("signup")
    openModal()

  }
  return (
    <div>
      <button className="modalSignbtn centerSignupBtn text-center" onClick={handleSignupClick}>
        Sign Up
      </button>
      <button className="modalSignbtn centerSignupBtn text-center" onClick={handleLoginClick}>
        Login
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" className="modalForm">
        { formToShow === "signup" ?
          <>
          <div className="modalTop">
          <label>Sign up to LingoChat</label>
          <button onClick={closeModal} className="closeModal">
            X
          </button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="firstLastName">
            <input className="firstName" placeholder="your name" type="name" onChange={handleRegisterInfo} value={registerInfo.name} name="firstName" id="firstName" required />
          </div>
          <input placeholder="age" type="age" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.age} name="age" id="age" required />
          <input placeholder="email" type="email" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.email} name="email" id="email" required />
          <input placeholder="password" type="password" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.password} name="password" id="password" required />
          <input placeholder="confirm password" type="password" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.conPassword} name="conPassword" id="conPassword" required />
          <select type="text" className="inputLogin" placeholder="Gender" onChange={handleRegisterInfo} defaultValue="none" name="gender" id="gender" required style={{ width: "100%" }}>
            <option value='none' disabled >Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button className="modalSignbtn" type="submit">
            Create Account
          </button>
        </form>
          </>
          :
          <Login/>
        }
      </Modal>
      <img src={logo} alt="lingochat"/>
      
      
    </div>
  );
}
