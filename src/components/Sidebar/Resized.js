import './index.scss'
import '../../Sizing.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoN from '../../assets/images/ni.jpeg'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Resized = () => {

    const [toggleState, setToggleState] = useState(false);

    const handleToggle = () => {
        setToggleState(toggleState => !toggleState);
    }
    let toggleClass = toggleState ? '-active' : '';
    return (
        <>
            <div className="resized-bar">
                <div className="logo-resized">
                    <Link to='/'>
                        <img className='logo-img-rezised' src={LogoN} alt="logo" />
                    </Link>
                </div>
                <div className={`dropdown${toggleClass}`} onClick={handleToggle}>
                        <ul className='platform-list-resized'>  
                            <li className='platform-box-resized'>
                                <NavLink exact='true' activeclassname='active' to='/'>
                                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' /> Home
                                </NavLink>
                                <NavLink exact='true' activeclassname='active' className="about-link-rezised" to='/about'>
                                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' /> About
                                </NavLink>
                                <NavLink exact='true' activeclassname='active' className="contact-link-rezised" to='/contact'>
                                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> Email
                                </NavLink>
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
                </div>
                <button className='toggle-button' onClick={handleToggle}>_____<br />_____<br />_____</button>
            </div>
        </>
    )
}

export default Resized