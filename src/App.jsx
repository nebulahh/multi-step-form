import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Form from './Components/Form'
import { useState } from 'react'
import { FormProvider } from './context/formContextApi'

function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  )
}

export default App
