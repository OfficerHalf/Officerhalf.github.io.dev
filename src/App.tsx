import React from "react";
import {
  CssBaseline,
  Container,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";
import { Email } from "@material-ui/icons";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h2">
            Nathan Smith
          </Typography>
          <IconButton>
            <GithubCircle />
          </IconButton>
          <IconButton>
            <LinkedinBox />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
        </Toolbar>
      </Container>
    </>
  );
};

export default App;
