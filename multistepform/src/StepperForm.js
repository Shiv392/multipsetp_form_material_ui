import React, { useState } from 'react'
import { Stepper,Step,StepLabel, Button,Typography } from '@mui/material'

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
            return 'this is shiv soni';
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
