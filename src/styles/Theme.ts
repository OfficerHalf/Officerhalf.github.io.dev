import { createMuiTheme } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2962ff"
    },
    secondary: amber
  }
});

export default theme;
