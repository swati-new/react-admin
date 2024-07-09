import React from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Topbar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display='flex' justifyContent='end'>
      {/* Search Bar */}
      <Box 
        display='flex' 
        backgroundColor={colors.primary[400]}
        borderRight='3px'
      >
        {/* <InputBase sx={{ml:2, flex:2, width: '500px', borderRadius: "5px"}} placeholder='Search' />
        <IconButton type="button" sx={{p:1}}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      

      {/* Icons */}
      <Box display='flex' justifyContent="right">
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
    
          {/* <IconButton>
          <SettingsOutlinedIcon />
          </IconButton> */}
          <IconButton>
          <PersonOutlinedIcon />
          </IconButton>

          <IconButton>
          {/* <NotificationsOutlinedIcon /> */}
          </IconButton>
      </Box>
      <IconButton sx={{display: 'flex'}}></IconButton>
    </Box>
  )
}

export default Topbar;

