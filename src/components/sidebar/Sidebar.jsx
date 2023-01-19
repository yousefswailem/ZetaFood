import React from 'react'
import "./sidebar.css";
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Toolbar from '@mui/material/Toolbar';

export const Sidebar = () => {

  const drawerWidth = 150;


  return (
    <>
      <Drawer

        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#003d4d',
            color: 'white'
          },
        }}
        variant="permanent"
        anchor="right"
      >

        <Toolbar />
        <List >

          <ListItemButton >
            <ListItemText >
              <ArrowBackIosIcon />
            </ListItemText >
          </ListItemButton>

          <Typography className="sidebar"  >
            الاسبوع الحالي
          </Typography >

          <ListItemButton >
            <ListItemText sx={{ display: 'flex', direction: 'rtl' }} >
              <ArrowForwardIosIcon />
            </ListItemText >
          </ListItemButton>

          {['السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس'].map((text, index) => (
            <>
              <Divider />
              <ListItem key={text} disablePadding>
                <ListItemButton >
                  <ListItemText className="sidebar" primary={text} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
    </>
  )
}
