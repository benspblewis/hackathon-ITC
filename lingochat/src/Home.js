import React, { useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios";
import logo from "./logo.png";
import Login from "./login";
import { Box, Flex, Link, Text, Center, Button } from "@chakra-ui/react";

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
  const [formToShow, setFormToShow] = useState(null);
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
        console.log("signup response", res.data);
        setFormToShow("login");
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  function handleLoginClick() {
    setFormToShow("login");
    openModal();
  }
  function handleSignupClick() {
    setFormToShow("signup");
    openModal();
  }
  return (
    <Box>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" backgroundColor="green.100" justifyContent="center" flexWrap="wrap">
        <div>
          <Button onClick={handleSignupClick} mr={2} mt={2} mb={2}>
            Sign Up
          </Button>
          <Button onClick={handleLoginClick} mt={2} mb={2}>
            Login
          </Button>
        </div>
      </Flex>
 
      <Box textAlign="center">
        <Flex flexWrap="wrap">
        <Text fontSize="xl" ml={10} mr={10} mt={10}>
        Welcome to LingoChat. LingoChat is the social application that connects the diverse cultures that make up our society. Create an account and discover the new way to interact with people.
          </Text>

        </Flex>

      </Box>
 

      {/* </Flex> */}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" className="modalForm">
        {formToShow === "signup" ? (
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
                <option value="none" disabled>
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <Button className="modalSignbtn" type="submit">
                Create Account
              </Button>
            </form>
          </>
        ) : (
          <Login />
        )}
      </Modal>
      <img src={logo} alt="lingochat" />
    </Box>
  );
}
