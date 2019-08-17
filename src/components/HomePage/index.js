import React from 'react'
import {Typography,Paper,Avatar,Button} from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

//import Link from '@material-ui/core/Link';




const styles=theme=>({
    main:{
        width:'auto',
        display:'block',
        marginLeft:theme.spacing.unit*3,
        marginRight:theme.spacing.unit*3,
        // [theme.breakpoint.up(400+theme.spacing.unit*3*2)]:{
        //      width:400,
        //      marginLeft:'auto',
        //      marginRight:'auto'

        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        avatar :{
            margin:theme.spacing.unit,
            backgroundColor:theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
          },
        submit:{
            marginTop:theme.spacing.unit,
        }
    }
)
function HomePage(props){
    const {classes} =props
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <VerifiedUserOutlined/>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Home
                </Typography>              
          
               
                <Button type="submit"  variant ="contained" color="primary" component={Link} to ="login" className={classes.submit}>Login</Button>
                
               
                   
              {<Button type="submit"  variant ="contained" color="secondary" component={Link} to ="dashboard" className={classes.submit}>DashBoard</Button>}              
                
           
                     
                {"Don't have an account? "}
                <Button type="submit"  variant ="contained" color="primary" component={Link} to ="register" className={classes.submit}>Sign up</Button>
          
        
                
              
            </Paper>
           
            </Container>
    );
}
export default withStyles(styles)(HomePage);