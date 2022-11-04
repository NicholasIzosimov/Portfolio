import './index.scss'
import '../../Sizing.scss'
import saltventure from '../../assets/images/saltventure.png'
import js from '../../assets/images/javascript.png'
import dotnet from '../../assets/images/dotnet.png'
import csharp from '../../assets/images/csharp.png'
import github from '../../assets/images/github.png'
import sql from '../../assets/images/sql.png'
import react from '../../assets/images/react.png'
import azure from '../../assets/images/azure.png'
import typescript from '../../assets/images/typescript.png'

const About = () => {
    return (
        <>
            <div className="container-about-page">
                <div className="projects-grid">
                    <div className="text-zone">
                        <h1>
                            Projects that I've created
                        </h1>
                        <div className='toggle-div'>
                            <a target="_blank" className='project-list-item' href='https://saltventure.github.io/'>
                                <img className="project-images" src={saltventure} />Salt Venture</a>
                            <p className='project-description'>Salt Venture is an application made as a final project for the salt bootcamp
                                <br />It's a gambling platform that does not involve real currencies and instead you play for points.</p>
                        </div>
                        <div className='toggle-div'>
                            <a target="_blank" className='project-list-item' href='https://github.com/NicholasIzosimov/puppiesFullstack'>
                                Dogalogue</a>
                            <p className='project-description'>Dogalogue is a full stack application made for learning purposes.
                                <br />It's an application which allows you to add, update and remove dogs from a list. The application then also displays a random picture of that breed</p>
                        </div>
                        <div className='toggle-div'>
                            <a target="_blank" className='project-list-item' href='https://github.com/NicholasIzosimov/katacollection'>
                                Kata Collection</a>
                            <p className='project-description'>A collection of katas solved by me in order to learn more!</p>
                        </div>
                        <div className='toggle-div'>
                            <a target="_blank" className='project-list-item' href='https://github.com/NicholasIzosimov/katacollection'>
                                Taxi-App Aggregator</a>
                            <p className='project-description'>An app which through API:s gathers information about price differences
                                for taxis in Stockholm and displays it neatly.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="projects-grid">
                    <div className='text-zone'>
                        <h1 className="">
                            My Tech Stack
                        </h1>
                        <div target="_blank" className='project-list-item stack'>
                            <div className='tech-stack'>
                                <br />These are some of the technologies
                                <br />that I've worked with before<br />
                                <div className='stack-images'>
                                    <a target="_blank" href="https://www.javascript.com/">
                                        <img src={js} alt="Javascript" />
                                    </a>

                                    <a target="_blank" href="https://dotnet.microsoft.com/en-us/">
                                        <img src={dotnet} alt="dotNET" />
                                    </a>

                                    <a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/csharp/">
                                        <img src={csharp} alt="C#" />
                                    </a>

                                    <a target="_blank" href="https://github.com/">
                                        <img src={github} alt="GitHub" />
                                    </a>

                                    <br />
                                    <a target="_blank" href="https://www.microsoft.com/en-us/sql-server">
                                        <img src={sql} alt="SQL" />
                                    </a>

                                    <a target="_blank" href="https://reactjs.org/">
                                        <img src={react} alt="React" />
                                    </a>

                                    <a target="_blank" href="https://www.typescriptlang.org/">
                                        <img src={typescript} alt="Typescript" />
                                    </a>

                                    <a target="_blank" href="https://azure.microsoft.com/en-gb/">
                                        <img src={azure} alt="Azure" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About