import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoN from '../../assets/images/logo-n.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img className='logo-img' src={LogoN} alt="logo" />
            <p className="sub-logo">Nicholas Izosimov</p>
        </Link>
        <nav className='nav-icons'>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

        </nav>
        <hr className='nav-bar-divider' />
    </div>
)

export default Sidebar