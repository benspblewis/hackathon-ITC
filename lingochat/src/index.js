import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContext } from "./contexts/AuthContext";
import AppContext from "./contexts/AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthContext>
    <ChakraProvider resetCSS={true}>
      <AppContext>
        <App />{" "}
      </AppContext>
    </ChakraProvider>
  </AuthContext>
  // </React.StrictMode>
);
