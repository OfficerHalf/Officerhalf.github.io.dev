import React from "react";
import { CssBaseline, Container } from "@material-ui/core";

import { TopBar } from "./components";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <TopBar />
      </Container>
    </>
  );
};

export default App;
