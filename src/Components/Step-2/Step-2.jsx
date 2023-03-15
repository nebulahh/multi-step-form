import { Field, Formik } from 'formik';
import { useContext, useState  } from 'react';
import * as Yup from 'yup';
import FormContext from '../../context/formContextApi';
import iconAdvanced from '../../assets/icon-advanced.svg'
import iconArcade from '../../assets/icon-arcade.svg'
import iconPro from '../../assets/icon-pro.svg'
import './Step-2.css'

const Plans = () => {
 const { saveInfo, planOptions, userInfo, toggleDuration, handleNextStep, handlePrevStep } = useContext(FormContext)

const handleSubmit = (values) => {
  console.log(values);
  // if (values.user_plan) {
    handleNextStep(values)
  // } else {
    // return
  // }
}

function goBack() {
  handlePrevStep()
} 

function handleChange(e) {
  saveInfo(e.target.value)
  console.log(userInfo)
}

return (
  <section className='form-container md:pt-4'>
    <Formik
      initialValues={{
        user_plan: ''
      }}
      validationSchema={
        Yup.object().shape({
          user_plan: Yup.string().required('You must select one')
        })
      }
      onSubmit={(values) => {
        handleNextStep(values)
      }}>
      {
        formik => (
          <form onSubmit={formik.handleSubmit} className='flex flex-col'>
            <div className='form'>
             
             <h1 className='py-3 font-bold text-2xl text-[#02295a]'>Select your plan.</h1>
             <p className='pb-2 text-[#9699ab]'>You have the option of monthly or yearly billing.</p>
             
            <div className="md:flex md:gap-4">
            <div className="flex hover:border-blue-300 md:pl-2 md:h-auto border-[#d6d9e6] w-full p-4 justify-start items-center h-20 border mb-3 gap-4 rounded-lg">
              <label className='flex cursor-pointer gap-5 md:flex-col'>
               <div className='w-12'>
               <img src={iconArcade} alt="icon" />
               </div>
               <div className="flex gap-1  flex-col">
                <b className='text-[#02295a]'>Arcade</b>
                <small>
                  ${
                    !userInfo.plan_duration
                      ? planOptions.Arcade.monthly
                      : planOptions.Arcade.yearly
                  }/{!userInfo.plan_duration ? 'mo' : 'yr'}
                </small>
              {userInfo.plan_duration && <small>2 months free</small>}
               </div>
               <input type="radio" name="user_plan" id="arcade" onChange={handleChange} value="Arcade" checked={userInfo.user_plan === 'Arcade'} required/>
              </label>
             </div>

            <div className="flex md:pl-2 hover:border-blue-300 md:h-auto w-full border border-[#d6d9e6] items-center justify-start h-20 p-4 mb-3 gap-4 rounded-lg">
             <label className='md:flex-col cursor-pointer flex gap-5'>
              <div className="w-12">
              <img src={iconAdvanced} alt="icon" />
              </div>
              <div className="flex flex-col">
                <b className='text-[#02295a]'>Advanced</b>
                <small>
                ${
                    !userInfo.plan_duration
                      ? planOptions.Advanced.monthly
                      : planOptions.Advanced.yearly
                  }/{!userInfo.plan_duration ? 'mo' : 'yr'}
                </small>
             {userInfo.plan_duration && <small>2 months free</small>}
              </div>
              <input type="radio" name="user_plan" id="advanced" value="Advanced" onChange={handleChange} checked={userInfo.user_plan === 'Advanced'} required/>
             </label>
            </div>

            <div className="flex md:mb-3 hover:border-blue-300 md:h-auto border-[#d6d9e6] md:pl-2 p-4 h-20 w-full border items-center justify-start gap-4 rounded-lg">
             <label className='flex md:flex-col gap-5 cursor-pointer'>
             <div className="w-12">
             <img src={iconPro} alt="icon" />
             </div>
              <div className="flex flex-col">
               <b className='text-[#02295a]'>Pro</b>
               <small>
               ${
                    !userInfo.plan_duration
                      ? planOptions.Pro.monthly
                      : planOptions.Pro.yearly
                  }/{!userInfo.plan_duration ? 'mo' : 'yr'}
               </small>
              {userInfo.plan_duration && <small>2 months free</small>}
              </div>
              <input type="radio" name="user_plan" id="pro" onChange={handleChange} value="Pro" checked={userInfo.user_plan === 'Pro'} required/>
             </label>
             {/* <ErrorMessage name='user_plan'/> */}
            </div>
            </div>

            <div className="switcher bg-mongolia flex items-center gap-2 p-2 mb-20 justify-center">
             <p className="text-cool-gray font-medium sw-active">Monthly</p>
             <label className="switch relative inline-block w-[50px] h-[24px]">
              <input type="checkbox"
               checked={userInfo.plan_duration}
               onChange={toggleDuration}
               className='opacity-0 w-0 h-0'
              />
              <span className="slider round"></span>
            </label>
            <p className="text-cool-gray font-medium">Yearly</p>
           </div>

          </div>

          <footer className="footer">
           <button type='submit' onClick={goBack}
            className="px-4 border-0 mt-auto mb-8 py-4 font-bold h-8 rounded-[7px] cursor-pointer">Go Back</button> 
          
           <button type='submit' onClick={handleSubmit}
           className="bg-[#02295a] ml-auto px-4 text-white font-bold h-8 rounded">next</button> 
          </footer> 
        </form>
        ) 
      } 
   </Formik>

  </section>
)
}

export default Plans