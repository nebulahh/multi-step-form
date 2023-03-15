import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Form from './Components/Form'
// import Footer from './Components/Footer/Footer'
// import Tabs from './Components/Tabs/Tabs'
import { useState } from 'react'
import { FormProvider } from './context/formContextApi'
// import { Form } from 'formik'

function App() {
//  const {steps, currentStep} = useContext(FormContext)
//  console.log(steps);
//  console.log(currentStep);
  return (
    // <FormProvider>
    // <FormProvider>
    <FormProvider>
      <Form />
    </FormProvider>

  //   <div className='relative h-screen border-black border-solid border-4 bg-[#d6d9e6]'>
  //      <Navbar /> 
  //      <Form steps/> 
  //      <Tabs/> 
  //      <UserInfoForm/>
  //    <span>{value}</span>
  //     <footer className="absolute bg-white bottom-0 w-full h-16 border border-solid border-black px-3 flex justify-between">
  //     <button onClick={setCurrentStep(currentStep - 1)} type='button'></button>
  //      <button type='button'  
  //        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
  //       onClick={setCurrentStep(currentStep + 1)}
  //      disabled={currentStep === progressArr.length}
  //       >next</button>      </footer> 
  //     {steps[currentStep]} 
  //     <footer className="absolute bg-white bottom-0 w-full h-16 border border-solid border-black px-3 flex justify-between">
  //     <button type='button'></button>
  //      <button type='button' 
  //        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
  //       >next</button> 
  //     </footer>  
  //  </div>
  //  </FormProvider>
  )
}

export default App
