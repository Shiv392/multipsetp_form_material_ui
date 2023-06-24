import React, { useState } from 'react'
import { Stepper,Step,StepLabel, Button,Typography,TextField } from '@mui/material'

//function to contains all steps
//heaving all setps label or steps content
const getSteps=()=>{
  return [
    'Basic Info', 'Contact Information', 'Personal Information','Payment'
  ]
}
const getStepsContent=(step)=>{
    switch(step){
        case 0:
       return(
        <>
        <TextField
id="first-name"
label="First Name"
variant="outlined"
placeholder="Enter Your First Name"
fullWidth
margin="normal"
name="firstName"
/>
<TextField
id="last-name"
label="Last Name"
variant="outlined"
placeholder="Enter Your Last Name"
fullWidth
margin="normal"
name="lastName"
/>
<TextField
id="nick-name"
label="Nick Name"
variant="outlined"
placeholder="Enter Your Nick Name"
fullWidth
margin="normal"
name="nickName"
/>
</>
       )  
       case 1:
        return (
          <>
          <TextField
  id="email"
  label="E-mail"
  variant="outlined"
  placeholder="Enter Your E-mail Address"
  fullWidth
  margin="normal"
  name="emailAddress"
/>
<TextField
  id="phone-number"
  label="Phone Number"
  variant="outlined"
  placeholder="Enter Your Phone Number"
  fullWidth
  margin="normal"
  name="phoneNumber"
/>
<TextField
  id="alternate-phone"
  label="Alternate Phone"
  variant="outlined"
  placeholder="Enter Your Alternate Phone"
  fullWidth
  margin="normal"
  name="alternatePhone"
/>
          </>
        )  
        case 2:
          return (
         <>
         <TextField
id="address1"
label="Address 1"
variant="outlined"
placeholder="Enter Your Address 1"
fullWidth
margin="normal"
name="address1"
/>
<TextField
id="address2"
label="Address 2"
variant="outlined"
placeholder="Enter Your Address 2"
fullWidth
margin="normal"
name="address2"
/>
<TextField
id="country"
label="Country"
variant="outlined"
placeholder="Enter Your Country Name"
fullWidth
margin="normal"
name="country"
/>
         </>
          )
          case 3:
            return(
        <>
        <TextField
id="cardNumber"
label="Card Number"
variant="outlined"
placeholder="Enter Your Card Number"
fullWidth
margin="normal"
name="cardNumber"
/>
<TextField
id="cardMonth"
label="Card Month"
variant="outlined"
placeholder="Enter Your Card Month"
fullWidth
margin="normal"
name="cardMonth"
/>
<TextField
id="cardYear"
label="Card Year"
variant="outlined"
placeholder="Enter Your Card Year"
fullWidth
margin="normal"
name="cardYear"
/>
        </>
            )
    default:
                return 'this is null'
    }
}

function StepperForm() {
    const [activeStep,setActiveStep]=useState(0);
    const steps=getSteps();
    //increase step
    const addStep=()=>{
        setActiveStep(prevState=> prevState+1);
    }
    //move backword
    const backStep=()=>{
        setActiveStep(prevState=> prevState-1)
    }
  return (
    <div>
    {
    activeStep===4 ? <h1 className='text text-center text-success'>Your Response Has Been Added</h1> : 
    
    <>
      <Stepper activeStep={activeStep}>
{/* active step 0 means step1 (0) will be i nacti ve state
if we set activestep=1 that means 0 has been completed and control moves to step1
*/}
{
    steps.map((step,index)=>{
        return (
            <Step>
                <StepLabel key={index}>{step}</StepLabel>
            </Step>
        )
    })
}
      {/* <Step>
        <StepLabel>Step1</StepLabel>
      </Step> */}
      {/* <Step>
        <StepLabel>Step2</StepLabel>
      </Step>
      <Step>
        <StepLabel>Step3</StepLabel>
      </Step>
      <Step>
        <StepLabel>Step4</StepLabel>
      </Step> */}
      </Stepper>
   <form className='form'>{getStepsContent(activeStep)}</form>

       {
activeStep===0 ? null: <Button variant='contained' color='secondary' onClick={backStep}>Back</Button>
      }
      {
activeStep===3 ?<Button variant='contained' onClick={addStep}  color='primary'>Finish</Button> : <Button variant='contained' color='primary' onClick={addStep}>Next</Button>
      }
    </>
   }
</div>
  )
}

export default StepperForm
