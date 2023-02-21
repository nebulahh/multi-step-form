import { Formik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import FormContext from '../../context/formContextApi';

const UserInfoForm = () => {
 const {setUserInfo, userInfo, handleNextStep } = useContext(FormContext)

  // console.log(formikStateAndHelpers);
  // const { handleChange } = useContext(FormContext)
  // console.log(handleChange);
  // const change = (e) => handleChange(e.target.value)
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const {handleSubmit, handleChange, handleBlur ,values, touched, errors } = useFormik({
//   initialValues: {
//     email: '',
//     name: '',
//     phone_num: ''
//   },
//   validationSchema: Yup.object({
//     name: Yup.string()
//     .max(15, 'Must be 15 characters or less')
//     .trim()
//     .required('Required'),
//     phone_num: Yup.string()
//     .matches(phoneRegExp, 'Phone number is not valid')
//     ,
//     email: Yup.string().email('Invalid email address').trim().required('Required'),
//   }),
//   onSubmit: values => {
//     alert(JSON.stringify(values, null, 2));
//   },
// });
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const handleSubmit = (values) => {
  handleNextStep(values)
}

  return (
    <div>
      <Formik
        initialValues={userInfo}
        validationSchema={Yup.object({
               name: Yup.string()
               .max(15, 'Must be 15 characters or less')
               .trim()
               .required('Required'),
               phone_num: Yup.string()
               .matches(phoneRegExp, 'Phone number is not valid')
              ,
               email: Yup.string().email('Invalid email address').trim().required('Required'),
             })}
             onSubmit={handleSubmit}
             
      >
        {
          formik => (
            <form onSubmit={formik.handleSubmit} className='flex flex-col' autoComplete='off'>

<div className='form'>
              <h1 className='py-3'>Personal info</h1>
            <p className='pb-2'>Please provide your name, email address and phone number.</p>
              <div className='flex flex-col pb-4'>
      <label htmlFor="name">Name</label>
      <input className='border p-1' type="text" {...formik.getFieldProps('name')} id="name" placeholder='Stephen King'/>
      {formik.touched.name && formik.errors.name ? (

<div>{formik.errors.name}</div>

) : null}
    </div>


    <div className='flex flex-col pb-4'>
      <label htmlFor="email">Email</label>
      <input type="email" className='border p-1' {...formik.getFieldProps('email')} id="email" placeholder='stephenking@lorem.com'/>
      {formik.touched.email && formik.errors.email ? (

<div>{formik.errors.email}</div>

) : null}
    </div>

    <div className="flex flex-col pb-4">
      <label htmlFor="phone_num">Phone Number</label>
      <input type="tel" className='border p-1' {...formik.getFieldProps('phone_num')} id='phone_num' placeholder='+ 1 234 567 890'/>
      {formik.touched.phone_num && formik.errors.phone_num ? (

<div>{formik.errors.phone_num}</div>

) : null}
    </div>
    </div>
    {/* <button className='absolute bottom-0 right-0' type="submit">Submit</button> */}

    <footer className="bg-white absolute bottom-0 w-full h-16 px-3 flex items-center">
       <button type='button' 
         className="bg-[#02295a] ml-auto px-4 text-white font-bold h-8 rounded" 
        >next</button> 
      </footer> 
            </form>

          )
        }
      </Formik>
  
    </div>
  )
}

export default UserInfoForm