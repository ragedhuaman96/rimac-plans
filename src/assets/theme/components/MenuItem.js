import { genetareOverlay } from "./button";

export const menuItem = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...theme.typography.bodyMedium,
        color:
          theme.palette.mode === "dark"
            ? theme.palette.grey.grey50
            : theme.palette.grey.grey800,
        padding: "8px 16px",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.gray8,
            theme.palette.opacityOverlayligth.gray4
          ),
        },
        "&:active, &.Mui-focusVisible ": {
          backgroundColor: "transparent",
          ...genetareOverlay(
            theme,
            theme.palette.opacityOverlayDark.gray32,
            theme.palette.opacityOverlayligth.gray12
          ),
        },
        "&.Mui-disabled": {
          opacity: 0.3,
        },
      }),
    },
  },
};
