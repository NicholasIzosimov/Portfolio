import './index.scss'
import '../../Sizing.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoN from '../../assets/images/ni.jpeg'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Resized = () => (
    <>
        <div className="resized-bar">
            <div className="logo-resized">
                <Link to='/'>
                    <img className='logo-img-rezised' src={LogoN} alt="logo" />
                </Link>
            </div>
            <nav className='nav-icons-rezised'>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' /> Home
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="about-link-rezised" to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' /> About
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="contact-link-rezised" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> Email
                </NavLink>
                <ul className='platform-list-resized'>
                    <li className='platform-box-resized'>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/nicholas-izosimov-43874a158/'>
                            <img src={linkedin} color="#4d4d4e" alt="LinkedIn" />
                            <p>LinkedIn</p>
                        </a>
                        <a target="_blank" rel='noreferrer' href='https://github.com/NicholasIzosimov'>
                            <img src={github} color="#4d4d4e" alt="GitHub" />
                            <p>GitHub</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
)

export default Resized