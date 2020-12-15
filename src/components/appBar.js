import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const NavBar = () => {
    return(
        <div>
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Menu>
                    <MenuItem>An item</MenuItem>
                    <MenuItem>Another item</MenuItem>
                </Menu>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                nomos.io
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;