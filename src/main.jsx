import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Welcome from './Welcome.jsx'
import 'bootstrap/dist/css/bootstrap.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <div className='container'>
        <App />
    <Welcome />
    </div>
    
  </StrictMode>,
)
