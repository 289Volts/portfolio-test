import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";
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
      <SkipNavLink />
      <App />
    </ChakraProvider>
  </StrictMode>,
);
