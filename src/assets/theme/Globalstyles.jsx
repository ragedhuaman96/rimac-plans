import React from "react";
import GlobalStylesUI from "@mui/material/GlobalStyles";
import { useTheme } from "@mui/material";

export default function Globalstyles() {
  const theme = useTheme();
  return (
    <GlobalStylesUI
      styles={{
        "scroll-style::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.grey800
              : theme.palette.grey.grey50,
        },
        "scroll-style::-webkit-scrollbar-corner": {
          backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.grey.grey800
            : theme.palette.grey.grey50,
        },
        "scroll-style::-webkit-scrollbar-thumb": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.grey600
              : theme.palette.grey.grey400,
          borderRadius: "8px",
        },
        
      }}
    ></GlobalStylesUI>
  );
}
