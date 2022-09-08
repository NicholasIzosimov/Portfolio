import './index.scss'
import saltventure from '../../assets/images/saltventure.png'

const About = () => {
    return (
        <>
            <div className="container">
                <div className="text-zone">
                    <h1>
                        These are some projects that I've created!
                    </h1>
                    <br />
                    <ul>
                        <li className='project-list'>
                            <a target="_blank" className='project-list-item' href='https://saltventure.github.io/'>
                                <img className="project-images" src={saltventure}/>Salt Venture</a>
                            <p>Salt Venture is a free gambling platform where -<br />
                            you play for points rather than real life currencies</p>
                        </li>
                    </ul>
                </div>
                <div className='text-zone 2'>
                    <h1>
                        About me
                    </h1>
                </div>
            </div>
        </>
    )
}

export default About