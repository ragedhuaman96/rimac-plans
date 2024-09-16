export const Tabs = {
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.bodyMedium,
        textTransform: "none",
        "&.Mui-selected": {
          color:
            theme.palette.mode === "dark"
              ? theme.palette.blue.blue200
              : theme.palette.blue.blue600,
        },
        "&.MuiButtonBase-root": {
          padding: "8px 16px",
          height: "auto",
          minWidth: "auto",
          maxWidth: "auto",
          minHeight: "auto",
          maxHeight: "auto",
        },
      }),
      textColorPrimary: ({ theme }) => ({
        color:
          theme.palette.mode === "dark"
            ? theme.palette.grey.grey400
            : theme.palette.grey.grey600,
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `1px solid ${
          theme.palette.mode === "dark"
            ? theme.palette.grey.grey700
            : theme.palette.grey.grey200
        }`,
        height: "36px",
        minHeight: "39px",
      }),
      indicator: ({ theme }) => ({
        top: 36.5,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.blue.blue200
            : theme.palette.blue.blue600,
      }),
    },
  },
};
