import React, {useState} from 'react';
import { Link } from "react-router-dom";



const Navigation = () => {

    const [isActive, setActive] = useState(false);
    const [isGuestService, setGuestService] = useState(false);


    const toggleClass = () => {
   
         setActive(
           !isActive)

        };

        const toggGuestService = () => {
            setGuestService(!isGuestService);
          }

  return (
    <ul className="">
    <li  >
      <Link id="one"  className={isActive ? 'active' : ''}
      onClick={toggleClass}  to="/" >About us</Link>
    </li>
    <li>
      <Link id="two" className={isGuestService ? 'active': ''} 
      onClick={toggGuestService}  to="/services">Services</Link>
    </li>
    <li>
      <Link  to="/bodyTreatments">Therapies</Link>
    </li>
    <li>
      <Link  to="/staff">Our Staff</Link>
    </li>
    <li>
      <Link  to="/contacts">Contacts</Link>
    </li>
    {/* <li >
      <Link to="/register">Register</Link>
      </li>
      <li >
      <Link to="/login">Login</Link>
    </li> */}
    <li >
      <Link to="/logout">Logout</Link>
    </li>
  </ul>
  )
}

export default Navigation