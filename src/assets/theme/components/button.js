import { he } from "date-fns/locale";

export const genetareOverlay = (theme, dark, ligth) => {
  return {
    backgroundImage:
      theme.palette.mode === "light"
        ? `linear-gradient(90deg, ${ligth} 0%, ${ligth}  100%)`
        : `linear-gradient(90deg, ${dark} 0%,${dark} 100%)`,
  };
}

export const button = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: "contained",
      color: "primary",
    },
    styleOverrides: {
      root: ({ theme, ...state }) => ({
        height: "36px",
        padding: "0 16px",
        margin: "0",
        ...theme.typography.bodyMedium,
        textTransform: "Capitalize",
        ...(state?.disabled && {
          cursor: "not-allowed !important",
          opacity: 0.3,
        }),
      }),

      contained: ({ theme, ...rest }) => ({
        "&, &:hover, &:active": {
          backgroundColor: `${
            theme.palette.mode === "light"
              ? theme.palette.blue.blue500
              : theme.palette.blue.blue200
          }`,
          color: `${
            theme.palette.mode === "light"
              ? "white"
              : theme.palette.grey.grey900
          } `,
        },
        "&:hover": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.ligth8,
            theme.palette.opacityOverlayligth.ligth4
          ),
        },
        "&:active": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.ligth32,
            theme.palette.opacityOverlayligth.ligth12
          ),
        },
        "&.Mui-disabled": {
          backgroundColor: `${
            theme.palette.mode === "light"
              ? theme.palette.blue.blue500
              : theme.palette.blue.blue200
          } `,
          color: `${
            theme.palette.mode === "light"
              ? "white"
              : theme.palette.grey.grey900
          } `,
        },
      }),

      text: ({ theme, ...rest }) => ({
        backgroundColor: "transparent",
        color:
          theme.palette.mode === "light"
            ? theme.palette.blue.blue600
            : theme.palette.blue.blue200,
        "&:hover": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.blue8,
            theme.palette.opacityOverlayligth.blue4
          ),
        },
        "&:active": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.blue32,
            theme.palette.opacityOverlayligth.blue12
          ),
        },
        "&.Mui-disabled": {
          color:
            theme.palette.mode === "light"
              ? theme.palette.blue.blue600
              : theme.palette.blue.blue200,
        },
      }),

      outlined: ({ theme, ...rest }) => ({
        "&, &:hover, &:active": {
          backgroundColor: "transparent",
          color:
            theme.palette.mode === "light"
              ? theme.palette.blue.blue600
              : theme.palette.blue.blue200,
          border: `1px solid ${theme.palette.grey.grey400}`,
        },
        "&:hover": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.gray8,
            theme.palette.opacityOverlayligth.gray4
          ),
        },
        "&:active": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.blue8,
            theme.palette.opacityOverlayligth.blue4
          ),
          border: `1px solid ${
            theme.palette.mode === "light"
              ? theme.palette.blue.blue500
              : theme.palette.blue.blue200
          }`,
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent",
          color:
            theme.palette.mode === "light"
              ? theme.palette.blue.blue600
              : theme.palette.blue.blue200,
          border: `1px solid ${theme.palette.grey.grey400}`,
        },
      }),
    },
  },
  MuiIconButton: {
    defaultProps: {
      color: "secondary",
    },
    
    styleOverrides: {
      root: ({ theme , ownerState}) => ({
        borderRadius: "4px",
        padding: "0",
        dispplay:"grid",
        placeItems:"center",
        ...(ownerState?.size === "small" && {
          width:"28px",
          height:"28px",
        }),
        ...(ownerState?.size === "medium" && {
          width:"36px",
          height:"36px",
        }),
        ...(ownerState?.size === "tiny" && {
          width:"22px",
          height:"22px",
        }),
      }),
      colorPrimary: ({ theme }) => ({
        color:
          theme.palette.mode === "light"
            ? theme.palette.blue.blue600
            : theme.palette.blue.blue200,
        "&:hover": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.blue8,
            theme.palette.opacityOverlayligth.blue4
          ),
        },
        "&:active": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.blue32,
            theme.palette.opacityOverlayligth.blue12
          ),
        },
        "&.Mui-disabled": {
          opacity: 0.3,
          color:
            theme.palette.mode === "light"
              ? theme.palette.blue.blue600
              : theme.palette.blue.blue200,
        },
      }),
      colorSecondary: ({ theme }) => ({
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey.grey600
            : theme.palette.grey.grey300,
        "&:hover": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.gray8,
            theme.palette.opacityOverlayligth.gray4
          ),
        },
        "&:active": {
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.gray32,
            theme.palette.opacityOverlayligth.gray12
          ),
        },
        "&.Mui-disabled": {
          opacity: 0.3,
          color:
            theme.palette.mode === "light"
              ? theme.palette.grey.grey600
              : theme.palette.grey.grey300,
        },
      }),
      
    },
  },
};
