import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const { handleCurrentUser} = useAuthContext()
  const navigate = useNavigate()
  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    console.log(email, password);
    try {
      const userInfo = {
        email,
        password,
      };
      const res = await axios.post(
        "http://localhost:8080/user/login",
        userInfo,
      );
      if (res.data.ok) {
       console.log(res.data)
       handleCurrentUser(res.data)
       localStorage.setItem('currentUser', JSON.stringify(res.data))
        navigate('/FindRoom')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Example@gmail.com"
        />
        <Form.Text>{emailError}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <Form.Text>{passwordError}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Rember Me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;














