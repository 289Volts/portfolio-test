import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Manrope",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Manrope",
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
