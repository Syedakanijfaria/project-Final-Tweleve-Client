import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth.js';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';



const Navigation = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none'
                // backgroundColor: theme.palette.secondary.main,
            },
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
                // backgroundColor: theme.palette.secondary.main,
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
                // backgroundColor: theme.palette.secondary.main,
            },
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#000'
        }
    })
    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();
    const { user, logout } = useAuth();

    const [state, setState] = React.useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button >
                    <ListItemText>
                        <Link className={mobileNavItem} to="/home"><Button style={{ textDecoration: 'none' }} color="inherit">HOME</Button></Link>
                    </ListItemText >
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText><Link className={mobileNavItem} to="/shop"><Button style={{ textDecoration: 'none' }} color="inherit">SHOP</Button></Link></ListItemText >
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>{
                        user?.email ?
                            <Box>
                                <NavLink className={mobileNavItem} style={{ textDecoration: 'none' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink className={mobileNavItem} style={{ textDecoration: 'none' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }</ListItemText >
                </ListItem>
            </List>
        </Box>
    )
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MILD<br />Baby Care
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/home"><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">HOME</Button></Link>
                            <Link className={navItem} to="/shop"><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">SHOP</Button></Link>
                            {
                                user?.email ?
                                    <Box>
                                        <NavLink className={navItem} style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </NavLink>
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <NavLink className={navItem} style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box >

            <div>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default Navigation;
