import { Box } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import Home from "./components/PageSections/Home";

function App() {
  return (
    <Layout>
      <Box as="main">
        <Home />
      </Box>
    </Layout>
  );
}

export default App;
