export const checkBox = {
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey.grey500
            : theme.palette.grey.grey500,
        "&.Mui-checked": {
          color:
            theme.palette.mode === "dark"
              ? theme.palette.blue.blue200
              : theme.palette.blue.blue600,
        },
        "&.Mui-disabled": {
          opacity: 0.3,
        },
      }),
    },
  },
};