import { NavLink as Link } from 'react-router-dom';
import './Folio.css';
import 'react-icons/fa';
import logo from './pc.jpg';
function Sidebar() {
    return(
    <body className='w3-light-grey w3-content' style={{maxWidth:"1600px"}}>
      <div className='w3-sidebar w3-collapse w3-white w3-animate-left' style={{zIndex:"3",Width:"300px"}}>
        <div className='w3-container'>
            <img src={logo} className="w3-round" style={{width:'45%'}} />
            <h4>My Portfolio</h4>
        </div>
        <div className='w3-bar-block'>
            <Link to="/" oneclick="" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className='w3-margin-right'>
                </i>PORTFOLIO</Link>
            <Link to="/about" oneclick="" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className='w3-margin-right'>
                </i>ABOUT</Link>
            <Link to="/contact" oneclick="" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className='w3-margin-right FcAbout'>
                </i>CONTACT</Link>
        </div>
      </div>
      </body>
    )
    
}

export default Sidebar;