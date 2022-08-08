import  React,{useContext} from 'react';
import { SessionContext } from '../context/Session';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

//import { makeStyles } from '@mui/material';
/*

const useStyles = makeStyles((theme)=>({
    shoppingCartStyle:{
        fontSize: "1rem",
        [theme.breakpoints.up('md')]: {
            fontSize: "2.5rem",
        },

    }
}))
*/
const styles = theme => ({
  badge: {
    padding:" 0 6px !important",
    height: "20px !important",
    fontSize: "0.75rem !important",
    
    [theme.breakpoints.down('md')]: {
      padding: "0 1px !important",
      height: "13px !important",
      fontSize: "0.56rem !important"
    },
  icon: {
    fontSize: "2rem !important",
    
    [theme.breakpoints.down('md')]: {
      fontSize: "1rem !important",
    }
  }
  },
});

function NavBar(props) {
 //const styles = useStyles();
 const { classes } = props;
 const {cart}=useContext(SessionContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="static">
        <Toolbar>
            {/*
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            */}
          <Typography  href="/" component="a" sx={{ flexGrow: 1 }}>
            <img id='logo' src='/imgs/logo2.png' alt="logo"/>
          </Typography>
          <Button color="inherit">
            <Badge badgeContent={cart.length} color="error" classes={{ badge: classes.badge }} >
                <ShoppingCartIcon color='white' className="icon"/>
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.prototype = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);