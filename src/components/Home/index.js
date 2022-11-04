import './index.scss'
import '../../Sizing.scss'

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
                <div className='projects-grid'>
                    <div className='text-zone'>
                        <h1>
                            My Personal Journey
                        </h1>
                        <div target="_blank" className='project-list-item'>
                            <p>
                                I'm a Swedish person born year 2000, currently living in Stockholm, Sweden. <br />————————<br /> 
                                I love learning new things and challenging myself.
                                <br />————————<br /> 
                                My passions are programming and music.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='projects-grid'>
                    <div className='text-zone'>
                        <h1>
                            My Coding Journey
                        </h1>
                        <div target="_blank" className='project-list-item'>
                            <p>
                                I've been developing since 2021 and during the summer of 2022 I enrolled in an intensive course:
                                <br />
                                <a target="_blank" href="https://www.salt.study/our-hubs/stockholm">{"</salt>"}</a>
                                <br />
                                for C# .NET & Java Script in order to learn more about developing. 
                                <br />————————<br /> During that time I developed
                                a big understanding for code and really expanded my knowledge for different stacks. 
                                <br />————————<br /> 
                                You can read about it more and view some of my creations under "Projects" in the navigation bar.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='projects-grid'>
                    <div className='text-zone'>
                        <h1>
                            My Musical Journey
                        </h1>
                        <div target="_blank" className='project-list-item'>
                            <p>
                               I've been producing music since 2015.<br />————————<br />
                               Throughout the years I've worked with multiple record labels which helped me gather over 20 million streams across platforms. <br />————————<br />
                               Started my own freelancing business which I've worked on during the last five years. <br />————————<br />
                               If you want to listen to my creations feel free to click the link below! <br />————————<br />
                               <a target="_blank" href="https://open.spotify.com/artist/5ZxZX70VVUDqKeK0TI1D2l?si=EH69V3MnQVq1gvWfJ5EMBA">{"Spotify"}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home