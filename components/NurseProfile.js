import React, { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import axios from 'axios';


axios.defaults.withCredentials = true;


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState('');
  const [hasFetched, setHasFetched] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const enterance = useCallback(() => {
    if (!hasFetched) {
      setHasFetched(true);
      console.log("Fetching welcome message");

      axios.get('http://localhost:8080/nurse/welcome')
        .then(response => {
          setMessage(response.data);
        })
        .catch(error => {
          console.error('Error fetching welcome message:', error);
        });
    }
  }, [hasFetched]);
  useEffect(() => {
    console.log("useEffect called");
    enterance();
  }, [enterance]);

  const handleLogout = () => {
    axios.get('http://localhost:8080/nurse/nurselogout')
      .then(response => {
        setMessage(response.data);
        window.globalVariable = -1;
        window.location.href = "/";
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h1>Nurse Profile</h1>
      <List>

    
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
             <InboxIcon />
              </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient-record-page">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Patient" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient-test-page">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Test" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient-medicine-page">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Medicine" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
              <ListItemButton component={Link} to="/know-more">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Know More" />
              </ListItemButton>
        </ListItem>

        
        
        
      { /* <ListItem disablePadding>
          <ListItemButton component={Link} to="/delete-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Patient Medicine" />
          </ListItemButton>
        </ListItem>
       
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/delete-patient-record">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Patient Record" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/delete-patient-test">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Patient Test" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/All-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="All Patient Medicine" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/single-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Single Patient Medicine" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/specific-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Specific Patient Medicine" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/specific-patient-record">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Specific Patient Record" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/specific-patient-test">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Specific Patient Test" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/medical-records">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Medical Records" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient-medical-records">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Patient Medical Records" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/medical-tests">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Medical Tests" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/patient-medical-tests">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Patient Medical Tests" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/add-patient-medicine">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Patient Medicine" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/add-patient-test">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Patient Test" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/add-patient-record">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Patient Record" />
          </ListItemButton>
        </ListItem>
     */}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div>{message}</div>
      <Button onClick={handleLogout} variant="contained" color="secondary">Logout</Button>

    </div>
  );
}
