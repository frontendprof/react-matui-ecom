
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';

import {makeStyles} from "@material-ui/styles";




const useStyles=makeStyles(()=>({
    typographyStyle:{
        flex:1,
        fontSize:30

    },
    root:{
        marginBottom:20
    }
}))



const Header = () => {

    const classes=useStyles();

    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography className={classes.typographyStyle}>
                    Mamazon Retailers heaven
                </Typography>

                <BrightnessAutoIcon />
            </Toolbar>
        </AppBar>
    )
}



export default Header;
