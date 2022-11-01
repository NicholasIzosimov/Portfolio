import './index.scss'
import '../../Sizing.scss'
import js from '../../assets/images/javascript.png'
import dotnet from '../../assets/images/dotnet.png'
import csharp from '../../assets/images/csharp.png'
import github from '../../assets/images/github.png'
import sql from '../../assets/images/sql.png'
import react from '../../assets/images/react.png'
import azure from '../../assets/images/azure.png'
import typescript from '../../assets/images/typescript.png'

const Home = () => {
    return (
        <>
            <div class="checkerboard">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hello, 👋
                        <br /> I'm Nicholas.
                        <br /> I am a full stack developer<br />
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
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Home