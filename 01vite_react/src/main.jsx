import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Chai />
    <h1>Thanks for visiting in our</h1>
  </>,
)
