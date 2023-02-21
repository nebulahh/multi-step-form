import { useState } from "react"
import { useContext } from "react"
import FormContext from "../../context/formContextApi"
import UserInfoForm from "../UserInfo/UserInfo"
import Plan from "../Plan/Plan"
import AddOns from "../AddOns/AddOns"
import Summary from "../Summary/Summary"
import Thanks from "../Thanks/Thanks"
import Navbar from "../Navbar/Navbar"

const Form = () => {
  const {currentStep} = useContext(FormContext)
  // console.log(steps);
  console.log(currentStep);
 const steps = [<UserInfoForm/>, <Plan />, <AddOns />, <Summary />, <Thanks />]


  return (
 
    <div className='relative h-screen border-black border-solid border-4 bg-[#d6d9e6]'>
    <Navbar />
    {steps[currentStep]}
    </div>

  )
}

export default Form