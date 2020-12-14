
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';

import {makeStyles} from "@material-ui/styles";




const useStyles=makeStyles(()=>({
    typographyStyle:{
        flex:1
    }
}))



const Header = () => {

    const classes=useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyle}>
                    THis is our headbar
                </Typography>

                <BrightnessAutoIcon />
            </Toolbar>
        </AppBar>
    )
}



export default Header;
