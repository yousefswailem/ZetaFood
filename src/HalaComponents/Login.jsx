
import './Login.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import { createTheme } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { InputAdornment } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';



const theme = createTheme({
  direction: 'rtl',
});


const Login = () => {
  return (

<div className="parent">


    <Box>
    <div className="child">

        <form className="form">

            <h2>ZetaFood</h2>
           
        <Box>
{/*         
        <ThemeProvider theme={theme}> */}
        <TextField
       
        InputProps={{
        startAdornment: <InputAdornment position="start"><Person2RoundedIcon/></InputAdornment>,
      }}  
            sx={{alignItems:"right"}}
            label="اسم المستخدم"
            variant="outlined"
            margin="normal"
           fullWidth
        />
        
      {/* </ThemeProvider> */}
        </Box>

        <TextField
       InputProps={{
       startAdornment: <InputAdornment position="start"><LockRoundedIcon/></InputAdornment>,
     }}
            
            label="كلمة المرور"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
        />

        <Button variant="text" sx={{ backgroundColor: '#e22f56',color:'white',"&:hover":{backgroundColor: '#e22f56b8'}}} fullWidth>
        تسجيل الدخول
        </Button>

        </form>
    </div>
   
    </Box>
    
</div>
 
  )
}

export default Login







