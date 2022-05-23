import './App.css';
import { * } from 'formik';
function App() {


  const formik = useFormik({
          initialValues:{
            username:"",
            email:"",
            passwordone: "",
            passwordtwo: ""
          },
          validationSchema: Yup.object().shape({
             username: Yup.string()
             .max()
          }),
          onSubmit: (values) =>{
                console.log(values)
          },
          onReset: (values) =>{
             values.username = ""
             values.email = ""
             values.passwordone = ""
             values.passwordtwo = ""
          },
           
          
  })
  
  return (
    <form className="App" onSubmit={formik.handleSubmit}>
      <h1>Form Using Formik and Yup</h1>
        <div className='main'>

           <div className='textfield'>
             <label>Username: </label>
               <input
                type='text'
                id='username'
                name='username'
                value={formik.values.username}
                onChange={formik.handleChange}
                placeHolder='Enter Your Username'
               />
           </div>

           <div className='textfield'>
             <label>Email: </label>
               <input
                type='email'
                id='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                placeHolder='Enter Your Email-id'
               />
           </div>
          
           <div className='textfield'>
             <label>Enter Password: </label>
               <input
                type='passwordone'
                id='passwordone'
                name='passwordone'
                value={formik.values.passwordone}
                onChange={formik.handleChange}
                placeHolder='Enter Your Password'
               />
           </div>
           
           <div className='textfield'>
             <label>Re-Enter Password: </label>
               <input
                type='passwordtwo'
                id='passwordtwo'
                name='passwordtwo'
                value={formik.values.passwordtwo}
                onChange={formik.handleChange}
                placeHolder='Re-Enter Your Password'
               />
           </div>
           <button type='submit'>Submit</button> <button onClick={formik.handleReset} >Reset</button>
        </div>
    </form>
  );
}

export default App;
