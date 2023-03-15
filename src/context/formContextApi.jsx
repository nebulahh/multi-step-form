import { createContext, useState } from "react";

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

  const planOptions = {
    Arcade: {
      monthly: 9,
      yearly: 90,
    },
    Advanced: {
      monthly: 12,
      yearly: 120,
    },
    Pro: {
      monthly: 15,
      yearly: 150,
    },
    onlineServices: {
      monthly: 1,
      yearly: 10,
    },
    largerStorage: {
      monthly: 2,
      yearly: 20,
    },
    customizableProfile: {
      monthly: 2,
      yearly: 20,
    },
  };

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone_num: '',
    user_plan: '',
    plan_duration: false,
    isOnlineService: false,
    isLargerStorage: false,
    isCustomizableProfile: false,
  })

  const handleNextStep = (newData) => {
    console.log(newData);
    setUserInfo(prev => ({...prev, ...newData}))
    setCurrentStep(prev => prev + 1)
  } 

  function confirm() {
    setCurrentStep(prev => prev + 1)
  }

  function toggleDuration(e) {
    setUserInfo(prev => ({...prev, plan_duration: e.target.checked}))
  }

  const saveInfo = (newData) => {
    setUserInfo(prev => ({...prev, user_plan: newData}))
  }

  const goToStepTwo = () => {
    setCurrentStep(1)
  }


  const handlePrevStep = (newData) => {
    if (currentStep == 0) {
      setCurrentStep(0)
    }
    setUserInfo(prev => ({...prev, ...newData}))
    setCurrentStep(currentStep - 1)
  } 

  const handleChange = (e) => {
    const name = e.target.name
    
    setUserInfo(prev => ({
      ...prev,
      [name]: e.target.checked
    }))
  }

  return (
    <FormContext.Provider value={{title, planOptions, confirm, toggleDuration, goToStepTwo, handleNextStep, handleChange, saveInfo, handlePrevStep, currentStep, setCurrentStep, userInfo}}>
       {children}
    </FormContext.Provider>
  )
}

export default FormContext