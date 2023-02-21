import { createContext, useState, useEffect } from "react";
import UserInfoForm from "../Components/UserInfo/UserInfo";
import Plan from '../Components/Plan/Plan'
import AddOns from '../Components/AddOns/AddOns'
import Summary from '../Components/Summary/Summary'
import Thanks from '../Components/Thanks/Thanks'

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
  const title = {
    0: 'Personal info',
    1: 'Select your plan',
    2: 'Pick add-ons',
    3: 'Finishing up',
    4: 'Thank you',
  }

  const [currentStep, setCurrentStep] = useState(0)


  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone_num: '',
    plan: '',
    online_service: false,
    larger_storage: false,
    customizable_profile: false,
  })

  const handleNextStep = (newData) => {
    setUserInfo(prev => ({...prev, ...newData}))
    setCurrentStep(prev => prev + 1)
    console.log(newData);
  } 


  const handlePrevStep = (newData) => {
    setUserInfo(prev => ({...prev, ...newData}))
    setCurrentStep(currentStep - 1)
  } 

  const handleChange = (e) => {
    const type = e.target.type

    const name = e.target.name
    let value; 
    if (type === 'checkbox') {
      value = e.target.checked
    } else {
      value = e.target.value
    }

    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const isSubmit = [...Object.values(userInfo)].every(Boolean) && page === Object.keys(title).length - 1
  
  return (
    <FormContext.Provider value={{title, handleNextStep, handlePrevStep, currentStep, setCurrentStep, userInfo}}>
       {children}
    </FormContext.Provider>
  )
}

export default FormContext