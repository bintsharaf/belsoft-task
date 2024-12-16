import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Welcome.jsx'
import 'bootstrap/dist/css/bootstrap.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="Header">
             <nav className="d-flex justify-content-between ">
            <   img src = "/images/founderLogo.png " className= "logo d-none d-md-block" alt="founderLogo" />
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Gallary</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/" className="btn nav-btn">Register <i class="fa-solid fa-arrow-right"></i></a></li>
                </ul>
                
            </nav>
         
       </div>
    <div className='container'>
        <App />
    <Welcome />
    </div>
    
  </StrictMode>,
)
