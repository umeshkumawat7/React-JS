import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'


const userName = 'Umesh Kumawat'

// if .jsx is a function so we can called it and pass in rendering 
function Main(){
  return(
    <h1>Welcome from main level function</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Chai />
    <h1>Thanks for visiting in our site {userName}</h1> 
    {/* <Main /> */}
  </>,
)
