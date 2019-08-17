
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
function Register(props){
    const {classes} =props
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [takim,setTakim]=useState('')
    const [password,setPassword]=useState('')
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <form className={classes.form} onSubmit={e=>e.preventDefault() && false}>
                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="name">User Name</InputLabel>
                     <Input id="name" name="name" autoComplete="off" autoFocus  value={name} onChange={e=>setName(e.target.value)}></Input>
                 </FormControl>
                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="mail">Email</InputLabel>
                     <Input id="mail" name="mail" autoComplete="off" autoFocus  value={mail} onChange={e=>setMail(e.target.value)}></Input>
                 </FormControl>
                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="password">Password</InputLabel>
                     <Input id="password" name="password" autoComplete="off" autoFocus  value={password} onChange={e=>setPassword(e.target.value)}></Input>
                 </FormControl>
                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="takim">What is your favorite football fan ?</InputLabel>
                     <Input id="takim" name="takim" autoComplete="off" autoFocus  value={takim} onChange={e=>setTakim(e.target.value)}></Input>
                 </FormControl>
                 </form>
                <Button type="submit"  variant ="contained" color="primary"  className={classes.submit} onClick={onRegister}>Register</Button>
                <Button type="submit"  variant ="outlined" color="secondary" component={Link} to ="/" className={classes.submit}>Home</Button>
                                         
               </Paper>
           
            </Container>
    );

    async function onRegister(){
        try{
            await firebase.register(name,mail,password)
            await firebase.takimEkle(takim)
            props.history.replace('/dashboard')
        }catch(err){
            alert(err.message)
        }
    }
}


export default withRouter(withStyles(styles)(Register));