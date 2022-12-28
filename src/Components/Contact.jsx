import emailjs from '@emailjs/browser';
import { Button, TextareaAutosize, TextField } from '@mui/material';
import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import useScreenType from "react-screentype-hook";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const screenType = useScreenType();
  const [alertOpenSuccess, setAlertOpenSuccess] = React.useState(false);
  const [alertOpenErr, setAlertOpenErr] = React.useState(false);
  const [emailinfo, setEmailinfo] = useState ({
        to_name: 'Lado',
        from_name:'',
        subject:'',
        message: ''
  })

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpenSuccess(false);
    setAlertOpenErr(false)
  };

    const SandEmails = (e)=>{
        e.preventDefault();

        emailjs.send('service_768rht6', 'template_o5duwcj', emailinfo, 'aojqRS6_snNCCKUC0')
      .then((result) => {
        setAlertOpenSuccess(true)
      }, (error) => {
        setAlertOpenErr(true)
      });
    }

  return (
    <div className='aboutme' id='contacts'>
        <div className="title">
            <div className="border"></div>
            <div className="TitleText">Contact ME</div>
            <div className="border"></div>
        </div>
        <div className="ProjectContainer">
              <form onSubmit={SandEmails}>
                <TextField id="standard-basic" label="E-mail" variant="standard"  sx= {screenType.isMobile?{ width:'55%', borderColor:'#FFD400' ,backgroundColor:'#FFD400'}:{ width:'100%', borderColor:'#FFD400' ,backgroundColor:'#FFD400'}} value={emailinfo.from_name} onChange={e => setEmailinfo ({... emailinfo , from_name: e.target.value})}/>
                <TextField id="standard-basic" label="Subject" variant="standard"  sx= {screenType.isMobile ? { marginTop:'20px', width:'55%',backgroundColor:'#FFD400'}:{ marginTop:'20px', width:'100%',backgroundColor:'#FFD400'}} value={emailinfo.subject} onChange={e => setEmailinfo ({... emailinfo , subject: e.target.value})}/>
                <TextareaAutosize
              aria-label="empty textarea"
              placeholder="message"
              value={emailinfo.message}
              style={screenType.isMobile? { width: '80%', height:'254px', marginTop:'20px',backgroundColor:'#FFD400', fontSize:'20px',color:"#403580" }:{ width: '100%', height:'254px', marginTop:'20px',backgroundColor:'#FFD400', fontSize:'40px',color:"#403580" }}
              onChange={e => setEmailinfo ({...emailinfo , message: e.target.value})}
              />
              <Snackbar open={alertOpenSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Message Has been sant!
                </Alert>
              </Snackbar>
              <Snackbar open={alertOpenErr} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                This is an error message!
                </Alert>
              </Snackbar>
              <button  className="SubmitBTN" type="submit" value="Send" >Sand</button>
                </form>
        </div>
    </div>
  )
}

export default Contact