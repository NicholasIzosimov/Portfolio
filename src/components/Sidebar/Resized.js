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
                    <img className='logo-img-rezised' src={LogoN} alt="logo" />
                </div>
                <button className='toggle-button' onClick={handleToggle}>————<br />————<br />————</button>
                <div className={`dropdown${toggleClass}`} onClick={handleToggle}>
                    <ul className='platform-list-resized'>
                        <li className='platform-box-resized'>
                            <NavLink exact='true' activeclassname='active' to='/' className="nav-item">
                                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                                <p>Home</p>
                            </NavLink>
                            <NavLink exact='true' activeclassname='active' className="nav-item" to='/about'>
                                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                                <p>About</p>
                            </NavLink>
                            <NavLink exact='true' activeclassname='active' className="nav-item" to='/contact'>
                                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                                <p>Contact</p>
                            </NavLink>
                            <a className="nav-item" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/nicholas-izosimov-43874a158/'>
                                <img className="nav-img-resized" src={linkedin} color="#4d4d4e" alt="LinkedIn" />
                                <p>LinkedIn</p>
                            </a>
                            <a className="nav-item" target="_blank" rel='noreferrer' href='https://github.com/NicholasIzosimov'>
                                <img className="nav-img-resized" src={github} color="#4d4d4e" alt="GitHub" />
                                <p>GitHub</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Resized