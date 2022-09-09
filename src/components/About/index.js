import './index.scss'
import saltventure from '../../assets/images/saltventure.png'

const About = () => {
    return (
        <>
            <body translate="no">
                <div class="container-bird">
                    <div class="body-bird"></div>
                    <div class="mouth"></div>
                    <div class="beak"></div>
                    <div class="feather"></div>
                    <div class="tail"></div>
                    <div class="leg"></div>
                </div>
            </body>
            <div className="container-about-page">
                <div className="projects-grid">
                    <div className="text-zone">
                        <h1>
                            Projects that I've created
                        </h1>
                        <a target="_blank" className='project-list-item' href='https://saltventure.github.io/'>
                            <img className="project-images" src={saltventure} />Salt Venture</a>
                    </div>
                </div>
                <div className="projects-grid">
                    <div className='text-zone'>
                        <h1 className="">
                            My coding journey
                        </h1>
                        <div target="_blank" className='project-list-item'>
                            <p className='about-me-text'>
                                I'm a 21 year old living in Stockholm, Sweden. <br />
                                I've been developing since 2021 and during the summer of 2022 I enrolled in an intensive course
                                <br /><a target="_blank" href="https://www.salt.study/our-hubs/stockholm">{"</salt>"}</a><br />
                                for C# .NET & Java Script in order to learn more about developing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About