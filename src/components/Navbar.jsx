import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"
export default function Navbar() {
  const navigate = useNavigate()
 const logout = () => {
  Cookies.remove("token");
  window.location.reload();
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HealthMate
          </Typography>
          {Cookies.get("token") ? <Button color="inherit" onClick={logout}>Logout</Button> : <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
  F
}
