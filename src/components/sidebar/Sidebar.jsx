import { React, useState, useEffect } from 'react'
import "./sidebar.css";
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Sidebar = () => {

  const drawerWidth = 150;
  const [days] = useState(['السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس']);
  const [clickedDay, setClickedDay] = useState({ day: '', date: '' });
  const date = new Date();
  const currentDay = date.getDay();
  const currentDate = date.toDateString();

  const handleButtonClick = (day) => {
    setClickedDay({ day, date: new Date(date.setDate(date.getDate() + (days.indexOf(day) - currentDay - 1))).toDateString() });
  }
  

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
          {/* <ListItemButton >
            <ListItemText >
              <ArrowBackIosIcon />
            </ListItemText >
          </ListItemButton> */}
          <Typography id="today" className="sidebar"  >
            اليوم والتاريخ:
          </Typography >
          <Typography id="today" className="sidebar"  >
            <span className="theDay" >{clickedDay.date}</span>
          </Typography >
          <div>
            {days.map((day, i) => (
              <>
                <Divider />
                <ListItem  disablePadding>
                  <ListItemButton >
                    <ListItemText 
                      sx={{
                        textAlign: 'center',
                        fontStyle:'italic'
                      }} 
                    key={day} onClick={() => handleButtonClick(day)}>
                      {day}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </div>
        </List>
      </Drawer>
    </>
  )
}
