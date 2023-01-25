import React, { useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios";
import logo from './logo.png'

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
    age: 0,
    gender: "",
    email: "",
    password: "",
    conPassword: "",
    // number: "",
    // admin: "",
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
        setIsOpen(false);
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  return (
    <div>
      <button className="modalSignbtn centerSignupBtn text-center" onClick={openModal}>
        Sign Up
      </button>
      <button className="modalSignbtn centerSignupBtn text-center" onClick={openModal}>
        Login
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" className="modalForm">
        <div className="modalTop">
          <label>Sign up to LingoChat</label>
          <button onClick={closeModal} className="closeModal">
            X
          </button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="firstLastName">
            <input className="firstName" placeholder="your name" type="name" onChange={handleRegisterInfo} value={registerInfo.name} name="firstName" id="firstName" required />
            {/* <input className="lastName" placeholder="last name" type="name" onChange={handleRegisterInfo} value={registerInfo.lastName} name="lastName" id="lastName" required /> */}
          </div>
          <input placeholder="age" type="age" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.age} name="age" id="age" required />
          <input placeholder="email" type="email" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.email} name="email" id="email" required />
          <input placeholder="password" type="password" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.password} name="password" id="password" required />
          <input placeholder="confirm password" type="password" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.conPassword} name="conPassword" id="conPassword" required />
          {/* <input placeholder="phone number" type="tel" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.number} name="number" id="number" required /> */}
          {/* <input placeholder="gender" type="text" className="inputLogin" onChange={handleRegisterInfo} value={registerInfo.gender} name="gender" id="gender" required /> */}

          {/* <select type="text" className="inputLogin" placeholder="Gender" onChange={handleRegisterInfo} value={registerInfo.gender} name="gender" id="gender" required style={{ width: "100%" }}> */}
          {/* <option>Gender?</option> */}
          {/* <option value="male">Male</option>
            <option value="female">Female</option> */}

          {/* </select> */}

          <select type="text" className="inputLogin" placeholder="Gender" onChange={handleRegisterInfo} defaultValue="none" name="gender" id="gender" required style={{ width: "100%" }}>
            <option value='none' disabled >Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button className="modalSignbtn" type="submit">
            Create Account
          </button>
        </form>
      </Modal>
    

      
      <img src={logo} alt="lingochat"/>
      
      
    </div>
  );
}
