import './App.css';
import {useFormik} from 'formik';
import * as Yup from "yup";
import { Button, ButtonGroup, Dialog, DialogContent, Grid, Stack, TextField } from '@mui/material';
import { useState } from 'react';
function App() {
const [openDialog,setOpenDialog] = useState(false)

const handleCloseDialog = () =>{
  setOpenDialog(false)
}

const  openNow = () =>{
  setOpenDialog(true)
}
 const formik = useFormik({

       initialValues:{

         username:"",
         email: "",
         passwordone: "",
         passwordtwo: ""

       },
       validationSchema:Yup.object({
        username: Yup.string().min(12,"Must be 12 or more characters").required("Required"),
        email:Yup.string().email("Invalid email","^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").required("Required"),
        passwordone: Yup.string().required('Password is required'),
        passwordtwo: Yup.string()
           .oneOf([Yup.ref('passwordone'), null], 'Passwords must match'),
        
       }),
       onSubmit: () =>{
        console.log(formik.values)
        
       },
       
       

 })


  return (
    <form className="App" onSubmit={formik.handleSubmit}>
     
        <Grid container display='flex' flexDirection='column' >
          <center> <h1>Form Using Formik and Yup</h1></center>
          <Stack spacing={3} alignItems='center'>
           <Grid>
               <TextField
                 id='outlined-basic'
                 label='Username'
                 variant='outlined'
                 name='username'
                 value={formik.values.username}
                 onChange={formik.handleChange}
               />
               {formik.errors.username ? <p className='errors'>{formik.errors.username}</p> : null}
           </Grid>
         
           <Grid item>
               <TextField
                id='outlined-basic'
                 label='Email'
                 variant='outlined'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
               />
               {formik.errors.email ? <p className='errors'>{formik.errors.email}</p> : null}
           </Grid>
          
           <Grid item>
               <TextField
                id='outlined-basic'
                label='New Password'
                variant='outlined'
                type='password'
                name='passwordone'
                value={formik.values.passwordone}
                onChange={formik.handleChange}
               />
                {formik.errors.passwordone ? <p className='errors'>{formik.errors.passwordone}</p> : null}
           </Grid>
           
           <Grid item>
               <TextField
                type='password'
                id='outlined-basic'
                label='Re-Enter Password'
                variant='outlined'
                name='passwordtwo'
                value={formik.values.passwordtwo}
                onChange={formik.handleChange}
               />
                 {formik.errors.passwordtwo ? <p className='errors'>{formik.errors.passwordtwo}</p> : null}
           </Grid>
           <ButtonGroup variant='contained' aria-label='outlined primary button group'>
           <Button variant='contained' color='primary' type='submit'  >Submit</Button> 
           <Button varinat='contained' color='primary' onClick={openNow}>view</Button>
           <Button variant='contained' color='primary' onClick={formik.handleReset} >Reset</Button>
           </ButtonGroup>
          </Stack>
          <Dialog onClose={handleCloseDialog} open={openDialog}>
            <DialogContent>
               <Stack>
                 <h1>Your form submitted</h1>
                 Your username is : {formik.values.username} <br></br>
                 Your Email is : {formik.values.email}<br></br>
                 Your Password is : {formik.values.passwordone}<br></br>
               </Stack>
            </DialogContent>
          </Dialog>
        </Grid>
    </form>
  );
}

export default App;
