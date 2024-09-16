import { createTheme } from "@mui/material";
import colors from "./base/colors";
import { typography } from "./base/typography";
import { Tabs } from "./components/Tabs";
import { button } from "./components/button";
import { typographyComponents } from "./components/typography";
import { checkBox } from "./components/Checkbox";
import { menuItem } from "./components/MenuItem";

const globalTheme = (mode) => {
  return createTheme({
    typography: {
      ...typography,
    },
    components: {
      ...Tabs,
      ...button,
      ...typographyComponents,
      ...checkBox,
      ...menuItem,
    },
    palette: {
      mode,
      ...colors(mode),
      ...(mode === "light" && {
        background: {
          default: "#f2f2f2",
        },
      }),
    },
  });
};

export default globalTheme;
