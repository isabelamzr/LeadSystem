import React, { useContext } from "react";
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const Topbar = ({ pageTitle, pageSubtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding="20px"
      backgroundColor={theme.palette.background.paper}
      borderBottom={`1px solid ${theme.palette.mode === 'dark' ? colors.grey[700] : colors.grey[500]}`}
    >

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            variant="h5"
            color={theme.palette.text.primary}
            fontSize="33px"
            fontWeight="600"
            sx={{ m: "0 0 7px 0" }}
          >
            {pageTitle}
          </Typography>


          {pageSubtitle && (
            <Typography 
              variant="body2" 
              color={colors.accent[500]}
              fontSize="17px"
              fontWeight="600"
            >
              {pageSubtitle}
            </Typography>
          )}
        </Box>


        {/* ICON THEME */}
        <Box display="flex" alignItems="center">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;