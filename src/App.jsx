import { useState } from 'react'

import Header from './components/header.jsx'
import InputForm from './components/InputForm.jsx'
import Results from './components/Results.jsx'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

const valueIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }
    })
}
  return (
  <>
    <Header/>
    <InputForm onChange={handleChange} userInput={userInput}/>
    <p className='center'>{!valueIsValid && `Please enter a duration greater then zero`}</p>
    { valueIsValid && <Results input={userInput}/>}
  </>
  )
}

export default App
