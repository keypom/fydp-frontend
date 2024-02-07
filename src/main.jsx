import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";

//extend the theme
const colors = {
  brand: {
    900: "#1a202c",
    100: "#f7fafc",
  },
};

const fonts = { body: "Inter", heading: "Newsreader" };

const theme = extendTheme({
  colors,
  fonts,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
