import React ,{useState} from 'react'
import {Typography,Paper,Avatar,Button,FormControl,Input,InputLabel} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link,withRouter} from 'react-router-dom';
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
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing.unit,
          },
        submit:{
            marginTop:theme.spacing.unit,
        }
    }
)
function Login(props){
    const {classes} =props
    const [mail,setMail]=useState('')
    const [password,setPassword]=useState('')
   
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                 Sign in
                </Typography>
                <form className={classes.form} onSubmit={e=>e.preventDefault() && false}>                
                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="mail">Email</InputLabel>
                     <Input id="mail" name="mail" autoComplete="off" autoFocus value={mail} onChange={e=>setMail(e.target.value)}></Input>
                 </FormControl>
                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="password">Password</InputLabel>
                     <Input id="password" name="password" autoComplete="off" autoFocus  value={password} onChange={e=>setPassword(e.target.value)}></Input>
                 </FormControl>
                
                 </form>
                <Button type="submit"  variant ="contained" color="primary" className={classes.submit} onClick={onLogin}>Login</Button>
                <Button type="submit"  variant ="outlined" color="secondary" component={Link} to ="/register" className={classes.submit}>Register</Button>
                <Button type="submit"  variant ="outlined" color="secondary" component={Link} to ="/" className={classes.submit}>Home</Button>
                                         
               </Paper>
           
            </Container>
    );

    async function onLogin(){
        try {
            await firebase.login(mail,password)
            props.history.replace('/dashboard')
        } catch (error) {
            alert(error.message)
        }
    }
}
export default withRouter(withStyles(styles)(Login));