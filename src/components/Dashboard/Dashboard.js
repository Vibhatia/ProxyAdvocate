import React,{useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from "react-router";
import Calendar from './Calendar'

const Dashboard = () => {
    const {user,logOut} = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async()=>{
        try{
            await logOut();
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }


  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user && user.email}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <button onClick={handleLogout}>Logout</button>
    <Calendar/>
    </div>
  )
}

export default Dashboard;