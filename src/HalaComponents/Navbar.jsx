
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = [' الرئيسية', 'الزبائن' ];
const settings = ['الصفحة الشخصية', 'تسجيل خروج'];

function Navbar() {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
setAnchorElUser(null);
};

return (

<AppBar position="fixed" sx={{background:'#003d4d',direction:"rtl",display:'flex'}}>
    <Container maxWidth="xl">
    <Toolbar disableGutters>
       
        <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
            ml: 4,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
        ZetaFood
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
            display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography variant="h1" sx={{textAlign:"center"}}>
                    {page}</Typography>
            </MenuItem>
            ))}
        </Menu>


        </Box>

     

        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}


        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'  }}
            >
                {page}
            </Button>
            ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="فتح">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>


            <Typography  sx={{ my: 2, color: 'white',marginLeft:2}} > Admin</Typography>
            
            <Avatar src="/broken-image.jpg" />


            </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        </Toolbar>
    </Container>
    </AppBar>
);
}
export default Navbar;






















// const Navbar = () => {

   

//   return (
//     <div>


      
//     </div>
//   )
// }

// export default Navbar
