import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function AppButton({ buttonName, variantType, disable }) {
  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "blueButton" },
            style: {
              backgroundColor: "#0328EE",
              cursor:"pointer",
              border: "none",
              color: "#fff",
              height: "56px",
              width: "210px",
              padding: "27px 32px",
              borderRadius: "80px !important",
              "&:hover": {
                background: "#031FB4",
              },
            },
          },    {
            props: { variant: "grayButton" },
            style: {
              backgroundColor: "#ffffff19",
              cursor:"pointer",
              border: "none",
              color: "#fff",
              height: "56px",
              padding: "27px 32px",
              borderRadius: "80px !important",
              "&:hover": {
                background: "#0328EE",
              },
            },
          },    {
            props: { variant: "whiteButton" },
            style: {
              backgroundColor: "#ffffff",
              cursor:"pointer",
              border: "none",
              color: "#0328EE",
              height: "56px",
              width: "210px",
              padding: "27px 32px",
              borderRadius: "80px !important",
              "&:hover": {
                background: "#031FB4",
                color:"#fff"
              },
            },
          }
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant={variantType} disabled={disable ? true : null}>
        <Typography>{buttonName}</Typography>
      </Button>
    </ThemeProvider>
  );
}

export default AppButton;
