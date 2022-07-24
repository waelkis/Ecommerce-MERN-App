import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import { useNavigate } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';

import {  useSelector } from "react-redux";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AdminNavbar = () => {
 
  const navigate = useNavigate();

  const { user} = useSelector((state) => state.auth);

  return (
    <Box>
      <AppBar position="fixed"  sx={{ height:75,color:"#712E71",backgroundColor: "#ECECEC"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           E-Commerce
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {user!=null?   <> 
             
             <IconButton
                 size="small"
                 aria-label="show more"
               
                 aria-haspopup="true"
            
                 color="inherit"
               >
           
            <Badge badgeContent={user.nom} color="default"  
            style={{
              marginLeft: 10,
              marginRight: 20,
              }}>
            <img
              style={{ height: 40, width : 40, borderRadius: '50%',
              marginLeft: 20,
              marginRight: 30,
            
              boxShadow: "0 0 0 1px gray, 0 0 0 2px #999, 0 1px 3px 2px gray"
              }}
              src= {`data:image/image/png;base64,${user.avatar}`}
              
              alt=""
            />
              </Badge>
             
             </IconButton>

             <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
        
              aria-haspopup="true"
           
              color="inherit"

              onClick={()=>{navigate("/Logout")}}
            >
               <LogoutIcon /> 
            </IconButton>
            
             </>
            : <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
      
            aria-haspopup="true"
         
            color="inherit"

            onClick={()=>{navigate("/Login")}}
          >
            <AccountCircle />
        
          </IconButton>
         }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
            
              aria-haspopup="true"
         
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
         
          
        </Toolbar>
      </AppBar>

    </Box>
  );
};

export default AdminNavbar;