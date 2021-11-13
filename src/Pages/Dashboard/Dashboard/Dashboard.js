import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder.js';
import MakeAdmin from '../MakeAdmin/MakeAdmin.js';
import MyOrder from '../MyOrder/MyOrder.js';
import AddNewProduct from '../AddNewProduct/AddNewProduct.js';
import Pay from '../Pay/Pay.js';
import ManageProducts from '../ManageProducts/ManageProducts.js';
import useAuth from '../../../Hooks/useAuth.js';
import AdminRoute from '../../Login/AdminRoute/AdminRoute.js';
import AddReview from '../Reviews/AddReview/AddReview.js';
//import Navigation from '../../Shared/Navigation/Navigation.js';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/shop"><Button variant="contained" color="inherit">SHOP</Button></Link>
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>

            <Link to={`${url}/addreview`}><Button color="inherit">Review</Button></Link>
            <Link to={`${url}/myorder`}><Button color="inherit">MyOrder</Button></Link>
            <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
            {admin && <Box>
                <Link to={`${url}/manageallorder`}><Button color="inherit">Manage All Order</Button></Link>
                <Link to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link>
                <Link to={`${url}/addnewproduct`}><Button color="inherit">Add new product</Button></Link>
                <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
            </Box>}

            <List>
                {['REVIEW', 'MY ORDERS', 'PAY', 'MANAGE ALL ORDERS', 'ADD A PRODUCTS', 'MANAGE PRODUCTS', 'MAKE ADMIN'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <AdminRoute exact path={`${path}/manageallorder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addnewproduct`}>
                        <AddNewProduct></AddNewProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route exact path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;