import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    FlickFiles
                </Typography>
                <Box>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Support</Button>
                    <Button color="inherit">Sign Up</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
