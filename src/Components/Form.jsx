import { useState } from "react"
import { useContext } from "react"
import FormContext from "../context/formContextApi"
import UserInfoForm from "./step-1"
import Plan from "./Step-2/Step-2"
import AddOns from "./Step-3"
import Summary from "./Step-4"
import Thanks from "./Thanks"
import Navbar from "./Navbar/Navbar"

const Form = () => {
  const {currentStep} = useContext(FormContext)
  
 const steps = [<UserInfoForm/>, <Plan />, <AddOns />, <Summary />, <Thanks />]


  return (
 
    <div className='body relative md:static md:p-3 md:gap-8 md:flex md:items-center h-screen border-black border-solid border-8 bg-[#bfe2fd]'>
    <Navbar currentStep={currentStep} />
    {steps[currentStep]}
    </div>

  )
}

export default Form