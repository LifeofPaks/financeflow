import React from "react";
import "./AppButton.scss";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import apple from "../../assets/apple.png";
import playstore from "../../assets/playstore.png";

function AppButton({
  buttonName,
  variantType,
  disable,
  buttonIcon,
  iconTrue,
  iconPosEnd,
}) {
  if (buttonIcon === "apple") {
    buttonIcon = apple;
  }

  if (buttonIcon === "playstore") {
    buttonIcon = playstore;
  }
  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "blueButton" },
            style: {
              backgroundColor: "#0328EE",
              cursor: "pointer",
              border: "none",
              color: "#fff",
              height: "56px",
              padding: "27px 32px",
              borderRadius: "80px !important",
              "&:hover": {
                background: "#031FB4",
              },
            },
          },
          {
            props: { variant: "grayButton" },
            style: {
              backgroundColor: "#ffffff19",
              cursor: "pointer",
              border: "none",
              color: "#fff",
              height: "56px",
              padding: "27px 32px",
              borderRadius: "80px !important",
              "&:hover": {
                background: "#0328EE",
              },
            },
          },
          {
            props: { variant: "whiteButton" },
            style: {
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#ffffff",
              cursor: "pointer",
              border: "none",
              color: "#0328EE",
              height: "56px",
              padding: "27px 32px",
              borderRadius: "80px !important",
              "&:hover": {
                background: "#031FB4",
                color: "#fff",
              },
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variantType}
        disabled={disable ? true : null}
        className={iconPosEnd ? "app-button icon-reverse" : "app-button"}
      >
        {iconTrue && <img src={buttonIcon} />}
        <Typography>{buttonName}</Typography>
      </Button>
    </ThemeProvider>
  );
}

export default AppButton;
