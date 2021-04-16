import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';
import Image from './asset/d4.png';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import EventIcon from '@material-ui/icons/Event';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import './Navbar.css'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  
    
  },
  grow1: {
    backgroundColor:'#fff',
borderRadius:'20rem',
marginTop:'0.4rem',


  },
  img : {
  width:'100px',
  

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight:'3rem',
    color:'#00587a',
   
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    marginLeft:'-1000px'
,    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Upcoming Events</MenuItem>
      <MenuItem onClick={handleMenuClose}>Ongoing Events</MenuItem>
      <MenuItem onClick={handleMenuClose}>Past Events</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge  color="secondary">
            <HomeIcon />
          </Badge>
        </IconButton>
        <Link to="/">
        <p>Home</p>
        </Link>
        
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
            <CollectionsBookmarkIcon />
          </Badge>
        </IconButton>
        <p>Resources</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <EventIcon />
        </IconButton>
        <p>Events</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge  color="secondary">
            <ContactPhoneIcon />
          </Badge>
        </IconButton>
        <Link to="/contact-us">
        <p>Contact Us</p>
        </Link>
        
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow +" navbar-container"}>
      <AppBar position="static" className={classes.grow1}>
        <Toolbar>
          <Link to="/">
          <img src={Image} alt="img here" className={classes.img}/>
          </Link>
     

          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">
           
            Home
          </Link>
            </Typography>
          
          <Typography className={classes.title} variant="h6" noWrap>
            Resources
          </Typography>
           
           
               <Typography className={classes.title} variant="h6" noWrap
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style ={{cursor:'pointer'}}
               >
            Events
          </Typography>
          <Link to="/contact-us" >
          <Typography className={classes.title} variant="h6" noWrap>
            Contact Us
          </Typography>
          </Link>
         
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#00587a"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
