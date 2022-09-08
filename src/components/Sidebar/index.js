import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoN from '../../assets/images/logo-n.png'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <div className="logo">
            <Link to='/'>
                <img className='logo-img' src={LogoN} alt="logo" />
            </Link>
            <p className="sub-logo">Nicholas Izosimov</p>
        </div>
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
            <ul className='platform-list'>
                <li className='platform-box'>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/nicholas-izosimov-43874a158/'>
                        <img src={linkedin} color="#4d4d4e" />
                    </a>
                    <a target="_blank" rel='noreferrer' href='https://github.com/NicholasIzosimov'>
                        <img src={github} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </nav>
        <hr className='nav-bar-divider' />
    </div>
)

export default Sidebar