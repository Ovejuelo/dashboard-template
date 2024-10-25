import { createTheme, Theme } from "@mui/material/styles";

import { lightPalette } from "./config/palette";
import baseConfig from "./config";

const lightTheme: Theme = createTheme({
  ...baseConfig,
  palette: {
    mode: "light",
    ...lightPalette,
  },
});

export default lightTheme;
