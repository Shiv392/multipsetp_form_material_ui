import React, { useState } from 'react'
import {useFormik} from 'formik';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const validate=(values)=>{
    let errors={};
    if(!values.firstname){errors.firstname='First Name is required'}
    else if(values.firstname.length>10){
        errors.firstname="first name must have max 10 letters"
    }
    if(!values.age){
        errors.age="age is required"
    }
    else if(values.age<18){
        errors.age="you cant submitt your form, you are under 18"
    }
    if(!values.fathername){
        errors.fathername="father name is required"
    }
    if(!values.mothername){
        errors.mothername="mother name is required"
    }
    if(!values.age){
        errors.age='please  your age'
    }
    return errors;
}

function BasicInfo() {
    const formik=useFormik({
        initialValues:{
firstname:'',lastname:'',age:0,fathername:'',mothername:'',gender:null
        },
        validate,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    const [datevalue,setDate]=useState(new Date());
  return (
    <>
    <div className='col m-3'>
        <label className='form-label'> First Name <span className='text text-danger text-sm'>*</span></label>
        <input onBlur={formik.handleBlur} className='form-control' type='text' id="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
        {
            formik.touched.firstname && formik.errors.firstname ? <span className='text text-danger'>{formik.errors.firstname}</span>: null
        }
    </div>
    <div className='col m-3'>
        <label className='form-label'> Last Name</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type='text' id='lastname' value={formik.values.lastname} />
        
    </div>
    <div className='col m-3'>
        <label className='form-label'> Father's Name<span className='text text-danger text-sm'>*</span></label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type='text' id='fathername' value={formik.values.fathername} />
        {
            formik.touched.fathername && formik.errors.fathername ? <span className='text text-danger'>{formik.errors.fathername}</span> : null
        }
    </div>
    <div className='col m-3'>
        <label className='form-label'> Mother's Name<span className='text text-danger text-sm'>*</span></label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type='text' id='mothername' value={formik.values.mothername} />
        {
            formik.touched.mothername && formik.errors.mothername ? <span className='text text-danger'>{formik.errors.mothername}</span> : null
        }
    </div>
  
    </>
  )
}

export default BasicInfo
