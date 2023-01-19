// import React from 'react';
import './Login.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';

const Login = () => {
  return (

<div className="parent">
        

    <div className="child">

    
        <form className="form">

        <TextField
            label="اسم المستخدم"
            variant="outlined"
            margin="normal"
            fullWidth
        />
        <TextField
            label="كلمة المرور"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
        />
        <Button variant="text" sx={{ borderRadius: '12%',backgroundColor: '#e22f56',color:'white',"&:hover"}} fullWidth>
        تسجيل الدخول
        </Button>

        </form>


    </div>


</div>
  )
}

export default Login







