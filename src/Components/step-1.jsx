import { ErrorMessage, Formik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import styled from '@emotion/styled'
import FormContext from '../context/formContextApi';

const UserInfoForm = () => {
 const {setUserInfo, userInfo, handleNextStep } = useContext(FormContext)

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const handleSubmit = (values) => {
  handleNextStep(values)
}

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 0.25rem;
`
  return (
    <section className='form-container'>
      <Formik
        initialValues={userInfo}
        validationSchema={Yup.object({
               name: Yup.string()
               .trim()
               .required('This field is required'),
               phone_num: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('This field is required'),
               email: Yup.string().email('Invalid email address').trim().required('This field is required'),
             })}
        onSubmit={handleSubmit}>
        {
          formik => (

            <form onSubmit={formik.handleSubmit} className='flex flex-col'>
              
              <div className='form'>
                <h1 className='py-3 font-bold text-2xl text-[#02295a]'>Personal info</h1>
                <p className='pb-2 text-[#9699ab]'>Please provide your name, email address and phone number.</p>
                
                <div className='flex flex-col pb-4'>
                  <div className="flex justify-between">
                    <label htmlFor="name">Name</label> 
                    {/* <ErrorMessage name='name'/> */}
                    {formik.touched.name && formik.errors.name ? (<StyledErrorMessage>{formik.errors.name}</StyledErrorMessage>) : null}
                  </div>
                 <input className='border p-1' type="text" {...formik.getFieldProps('name')} id="name" placeholder='Stephen King'/>
                </div>

                <div className='flex flex-col pb-4'>
                <div className='flex justify-between'>
                  <label htmlFor="email">Email</label>
                  {/* <ErrorMessage name='email'/> */}
                  {formik.touched.email && formik.errors.email ? (<StyledErrorMessage>{formik.errors.email}</StyledErrorMessage>) : null}
                </div>
                <input type="email" className='border p-1' {...formik.getFieldProps('email')} id="email" placeholder='stephenking@lorem.com'/>
                </div>

                <div className="flex flex-col pb-4">
                  <div className='flex justify-between'>
                    <label htmlFor="phone_num">Phone Number</label> 
      
                  {formik.touched.phone_num && formik.errors.phone_num ? (<StyledErrorMessage>{formik.errors.phone_num}</StyledErrorMessage>) : null}
                  </div>
                  <input type="tel" className='border p-1' {...formik.getFieldProps('phone_num')} id='phone_num' placeholder='+ 1 234 567 890'/>
                  
                </div>
              </div>

              <footer className="footer">
                <button 
                type='submit' 
                className="bg-[#02295a] ml-auto px-4 text-white font-bold h-8 rounded">next</button> 
              </footer> 
</form>

  )
}
</Formik>
  
</section>
  )
}

export default UserInfoForm