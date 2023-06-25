import React, { useState } from 'react'
import { Stepper,Step,StepLabel, Button,Typography,TextField } from '@mui/material'
import {FormikConsumer, useFormik} from 'formik'
//function to contains all steps
//heaving all setps label or steps content
const getSteps=()=>{
  return [
    'Basic Info', 'Contact Information', 'Personal Information','Payment'
  ]
}
//adding formik
 const initialValues = {
  firstName: '',
  lastName: '',
  nickName: '',
  emailAddress: '',
  phoneNumber: '',
  alternatePhone: '',
  address1: '',
  address2: '',
  country: '',
  cardNumber: '',
  cardMonth: '',
  cardYear: '',
};


const validate=(values)=>{
  let errors={};
  if(!values.firstName){
       errors.firstName='First Name is required'; 
    }
  else if(values.firstName.length>10){
    errors.firstName="first name must be max of 10 letters"
  }
  if(!values.lastName){
    errors.lastName="last Name is required"
  }
  else if(values.lastName.length>10){
    errors.lastName="last name must be max of 10 letters"
  }
  if(!values.emailAddress){
    errors.emailAddress="email is required"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)){
    errors.emailAddress="please enter valid email"
}
if(!values.phoneNumber){
  errors.address1="phoneNumber is required";
}
if(!values.address1){
  errors.address="address is required"
}
if(!values.country){
  errors.country="country is required"
}
else if(values.country!=='india'|| values.country!=='INDIA'){
  errors.country="You are not eligible, please take india citizenship"
}
if(!values.cardNumber){
  errors.cardNumber="card No is required for payment"
}
if(!values.cardMonth){
  errors.cardMonth="card month is required"
}
if(!values.cardYear){
  errors.cardYear="please enter card year"
}

  return errors;
}

function StepperForm() {
    const [activeStep,setActiveStep]=useState(0);
    const formik=useFormik({
      initialValues:initialValues,
      validate,
      onSubmit:(values)=>{
        console.log(values);
      }
    })
    const steps=getSteps();
    //increase step
    const addStep=()=>{
        if(activeStep===4){
          formik.handleSubmit()
        }
        else{
          setActiveStep(prevState=> prevState+1);
        }
    }
    //move backword
    const backStep=()=>{
        setActiveStep(prevState=> prevState-1)
    }

    //step content

    const getStepsContent=(step)=>{
      switch(step){
          case 0:
         return(
          <>
          <TextField
  id="firstName"
  label="First Name"
  variant="outlined"
  placeholder="Enter Your First Name"
  fullWidth
  margin="normal"
  name="firstName"
  value={formik.values.firstName}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.touched.firstName && formik.errors.firstName? 
      <span className='text text-danger'>{formik.errors.firstName}</span> : null
  }
  <TextField
  id="lastName"
  label="Last Name"
  variant="outlined"
  placeholder="Enter Your Last Name"
  fullWidth
  margin="normal"
  name="lastName"
value={formik.values.lastName}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
/>
{
  formik.touched.lastName && formik.errors.lastName ? <span className='text text-danger'>
    {formik.errors.lastName}
  </span>: null
}
  <TextField
  id="nickName"
  label="Nick Name"
  variant="outlined"
  placeholder="Enter Your Nick Name"
  fullWidth
  margin="normal"
  name="nickName"
  value={formik.values.nickName}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
 
  </>
         )  
         case 1:
          return (
            <>
            <TextField
    id="emailAddress"
    label="E-mail"
    variant="outlined"
    placeholder="Enter Your E-mail Address"
    fullWidth
    margin="normal"
    name="emailAddress"
    value={formik.values.emailAddress}
    onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.touched.emailAddress && formik.errors.emailAddress ? <span className='text text-danger'>
      {formik.errors.emailAddress} 
    </span>: null
  }
  <TextField
    id="phoneNumber"
    label="Phone Number"
    variant="outlined"
    placeholder="Enter Your Phone Number"
    fullWidth
    margin="normal"
    name="phoneNumber"
    value={formik.values.phoneNumber}
    onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.touched.phoneNumber && formik.errors.phoneNumber ? 
    <span className='text text-danger'>{formik.errors.phoneNumber}</span> : null
  }
  <TextField
    id="alternatePhone"
    label="Alternate Phone"
    variant="outlined"
    placeholder="Enter Your Alternate Phone"
    fullWidth
    margin="normal"
    name="alternatePhone"
    value={formik.values.alternatePhone}
    onChange={formik.handleChange}
  onBlur={formik.handleBlur}

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
  value={formik.values.address1}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.touched.address1 && formik.errors.address1 ? 
    <span className='text text-danger'>{formik.errors.address1}</span> : null
  }
  <TextField
  id="address2"
  label="Address 2"
  variant="outlined"
  placeholder="Enter Your Address 2"
  fullWidth
  margin="normal"
  name="address2"
  value={formik.values.address2}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  <TextField
  id="country"
  label="Country"
  variant="outlined"
  placeholder="Enter Your Country Name"
  fullWidth
  margin="normal"
  name="country"
  value={formik.values.country}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.touched.country && formik.errors.country ? 
    <span className='text text-danger'>{formik.errors.country}</span> : null
  }
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
  value={formik.values.cardNumber}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.touched.cardNumber && formik.errors.cardNumber ? 
    <span className='text text-danger'>{formik.errors.cardNumber}</span> : null
  }
  <TextField
  id="cardMonth"
  label="Card Month"
  variant="outlined"
  placeholder="Enter Your Card Month"
  fullWidth
  margin="normal"
  name="cardMonth"
  value={formik.values.cardMonth}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
  formik.touched.cardMonth && formik.errors.cardMonth ? 
  <span className='text text-danger'>{formik.errors.cardMonth}</span> : null
  }
  <TextField
  id="cardYear"
  label="Card Year"
  variant="outlined"
  placeholder="Enter Your Card Year"
  fullWidth
  margin="normal"
  name="cardYear"
  value={formik.values.cardYear}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.touched.cardYear && formik.errors.cardYear ? 
    <span className='text text-danger'>{formik.errors.cardYear}</span> : null
  }
          </>
              )
      default:
                  return 'this is null'
      }
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
      let labelprops={};
     return (
            <Step>
                <StepLabel key={index} {...labelprops}>{step}</StepLabel>
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
activeStep===3 ?<Button variant='contained'  disabled={Object.keys(formik.errors).length > 0} onClick={addStep}  color='primary'>Finish</Button> : <Button variant='contained' color='primary'  disabled={Object.keys(formik.errors).length > 0}  onClick={addStep} type='submit'>Next</Button>
      }
    </>
   }
</div>
  )
}

export default StepperForm
