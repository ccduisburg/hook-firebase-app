import React,{useEffect,useState} from 'react';
import {Typography,Paper,Avatar,Button,CircularProgress} from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import firebase from '../firebase';



const styles=theme=>({
    main:{
        width:'auto',
        display:'block',
        marginLeft:theme.spacing.unit*3,
        marginRight:theme.spacing.unit*3,
       

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
        submit:{
            marginTop:theme.spacing.unit,
        }
    }
)
function Dashboard(props){
    const {classes} =props
    const [takim,setTakim]=useState('');
    useEffect(()=>{
        firebase.getFotballFan().then(val=>{
            setTakim(val);
        
        })
    })
    if(!firebase.getUserName()){
        alert('firts you have to log in')
        props.history.replace('/login')
        return null
   
 }
  
    
   
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <VerifiedUserOutlined/>
                </Avatar>
                <Typography component="h1" variant="h5">
                 Hallo {firebase.getUserName()}
                </Typography>
                <Typography component="h1" variant="h5">
                Your favorite football fan :{takim ? `${takim}`:<CircularProgress size={20}/>}
                </Typography>
                <Button type="submit"  variant ="contained" color="primary" className={classes.submit} onClick={onLogOut}>Log out</Button>
                  </Paper>
         </Container>
    );

    async function onLogOut(){
        try {
            await firebase.logout()
            props.history.push('/')
        } catch (error) {
            alert(error.message)
        }
    }
}
export default withRouter(withStyles(styles)(Dashboard))