const VariantsWithColorIgual = ["bodyMedium", "titleMedium"]
export const typographyComponents= {
  MuiTypography: {
    styleOverrides: {
      root: ({theme, ...rest}) => ({
        ...(VariantsWithColorIgual.includes(rest.ownerState.variant) && {
          color: theme.palette.mode !=="dark" ? theme.palette.grey.grey800 : theme.palette.grey.grey50,
        }),
      }),
    }
  },
}