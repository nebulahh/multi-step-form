import { Field, Formik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import FormContext from '../context/formContextApi';
import './Step-2/Step-2.css'

const AddOns = () => {
  const { planOptions, handleChange, userInfo, handleNextStep, handlePrevStep } = useContext(FormContext)
 
 const handleSubmit = (values) => {
   handleNextStep(values)
  // console.log(values);
 }
 
 function goBack() {
   handlePrevStep()
 } 
 
return (
  <section className='form-container md:w-[60%]'>
    <Formik
    initialValues={{
      addOns: []
    }}
    onSubmit={handleSubmit}>
    {
      formik => (
        <form onSubmit={formik.handleSubmit} className='flex md:max-w-[100%] max-w-[375px] flex-col gap-2'>

          <div className='form'>
            <h1 className='py-3 font-bold text-2xl text-[#02295a]'>Pick your add-ons</h1>
            <p className='pb-2 text-[#9699ab]'>Add-ons help enhance your gaming experience.</p>
          
            <article className="flex border-[#d6d9e6] w-full p-2 items-center h-14 border mb-3 cursor-pointer gap-4 rounded-lg">
             <label htmlFor='online_service' className='justify-between flex w-full items-center'>
      
             <div className="flex items-center gap-[0.9rem]">
             <input type="checkbox" name="isOnlineService" onChange={handleChange} id="online_service" value="onlineService" checked={userInfo.isOnlineService} />
              
              <div className='text-[14px] md:text-base'>
               <b className='block text-[#02295a]'>Online service</b>
               <small>Access to multiplayer games</small>
              </div>
             </div>
             <span>
              +${
                  !userInfo.plan_duration
                   ? planOptions.onlineServices.monthly
                   : planOptions.onlineServices.yearly
                }/{!userInfo.plan_duration ? 'mo' : 'yr'}
              </span>
             </label>
            </article>
          
            <article className="flex w-full border border-[#d6d9e6] items-center h-14 p-2 mb-3 cursor-pointer gap-4 rounded-lg">
              <label htmlFor='larger_storage' className='flex w-full justify-between items-center'>

              <div className="flex items-center w-full gap-[0.9rem]">
              <input type="checkbox" name="isLargerStorage" onChange={handleChange} id="larger_storage" value="largerStorage" checked={userInfo.isLargerStorage} />
               
               <div className='text-[14px] md:text-base'>
                <b className='block text-[#02295a]'>Larger storage</b>
                <small>Extra 1TB of cloud save</small>
               </div>
               <span className='ml-auto'>
                +${
                  !userInfo.plan_duration
                   ? planOptions.largerStorage.monthly
                   : planOptions.largerStorage.yearly
                }/{!userInfo.plan_duration ? 'mo' : 'yr'}
               </span>
              </div>
             </label>
            </article>
          
            <article className="flex border-[#d6d9e6] p-2 h-14 w-full border items-center cursor-pointer gap-4 rounded-lg">
             <label htmlFor='customizableProfile' className='flex w-full justify-between items-center'>

             <div className="flex items-center w-full gap-[0.9rem]">
             <input type="checkbox" name="isCustomizableProfile" onChange={handleChange} id="customizableProfile" value="customizable_profile" checked={userInfo.isCustomizableProfile} />
              
              <div className='text-[14px] md:text-base'>
               <b className='block text-[#02295a]'>Customizable profile</b>
               <small>Custom theme on your profile</small>
              </div>
              <span className='ml-auto'>
              +${
                  !userInfo.plan_duration
                   ? planOptions.customizableProfile.monthly
                   : planOptions.customizableProfile.yearly
                }/{!userInfo.plan_duration ? 'mo' : 'yr'}
              </span>
             </div>
             </label>
            </article>
          
          </div>
        
          <footer className="footer">
            <button type='submit' onClick={handlePrevStep}
             className=" px-4 border-0 mt-auto mb-8 py-4 font-bold h-8 rounded-[7px] cursor-pointer">
              Go Back
            </button> 
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

export default AddOns