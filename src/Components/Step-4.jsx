import React, { useContext } from 'react'
import FormContext from '../context/formContextApi'
import './step-4.css'

const Summary = () => {
  const { userInfo, planOptions, confirm, goToStepTwo, handlePrevStep } = useContext(FormContext)


  function goBack() {
    handlePrevStep()
  }

  const planTotal = !userInfo.plan_duration
  ? planOptions[userInfo.user_plan].monthly
  : planOptions[userInfo.user_plan].yearly;

  const addOnsTotal = [
    userInfo.isOnlineService, 
    userInfo.isLargerStorage, 
    userInfo.isCustomizableProfile
  ].reduce((acc, addOn, index) => {
    if (!addOn) return acc;
    const name = ['onlineServices', 'largerStorage', 'customizableProfile'][index]
    const planDuration = !userInfo.plan_duration ? 'monthly' : 'yearly'
    const sum = planOptions[name][planDuration]
    return acc + sum
  }, 0)

  return (
    <section className='form-container'>
       <div className='form'>
      <h1 className='py-3 font-bold text-2xl text-[#02295a]'>Finishing up</h1>
      <p className='pb-2 text-[#9699ab]'>Double-check everything looks OK before confirming</p>

      <div className="summary">
        <div className='selection flex flex-col gap-3 rounded-lg p-2'>

          <article className='flex justify-between border-b'>
            <div>
             <b className='block text-[#02295a]'>{userInfo.user_plan} ({userInfo.plan_duration ? 'Yearly' : 'Monthly'})</b>            
            <small>
            <a href="#" onClick={goToStepTwo}>Change</a>
            </small>
            </div>
            <b>
              ${
                !userInfo.plan_duration 
                ? planOptions[userInfo.user_plan].monthly 
                : planOptions[userInfo.user_plan].yearly
              }/{!userInfo.plan_duration ? 'mo' : 'yr'}  
            </b> 
          </article>

          {
            userInfo.isOnlineService && (
              <article className='flex justify-between'>
                <p>Online Service</p>
                <p>
                 ${
                  !userInfo.plan_duration
                   ? planOptions.onlineServices.monthly
                   : planOptions.onlineServices.yearly
                  }/{!userInfo.plan_duration ? 'mo' : 'yr'}
                </p>
              </article>
            )
          }
          {
            userInfo.isLargerStorage && (
              <article className='flex justify-between'>
                 <p>Larger Storage</p>
                <p>
                 ${
                  !userInfo.plan_duration
                   ? planOptions.largerStorage.monthly
                   : planOptions.largerStorage.yearly
                  }/{!userInfo.plan_duration ? 'mo' : 'yr'}
                </p>
              </article>
            )
          }

          {
            userInfo.isCustomizableProfile && (
              <article className='flex justify-between'>
                 <p>Customizable Profile</p>
                <p>
                 ${
                  !userInfo.plan_duration
                   ? planOptions.customizableProfile.monthly
                   : planOptions.customizableProfile.yearly
                  }/{!userInfo.plan_duration ? 'mo' : 'yr'}
                </p>
              </article>
            )
          }
       </div>

       <article className='flex justify-between p-2 mt-2'>
        <p>Total (per month)</p>
        <b>
          ${planTotal + addOnsTotal}/{!userInfo.plan_duration ? 'mo' : 'yr'}
        </b>
       </article>
      </div>

    

    </div>
      <footer className="footer">
      <button type='submit' onClick={goBack}
           className=" px-4 border-0 mt-auto mb-8 py-4 font-bold h-8 rounded-[7px] cursor-pointer" 
          >Go Back</button> 
         <button type='submit' onClick={confirm}
           className="bg-[#02295a] ml-auto px-4 text-white font-bold h-8 rounded" 
          >Confirm</button> 
        </footer> 
    </section>
  )
}

export default Summary