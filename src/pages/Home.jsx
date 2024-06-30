import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
    return (
        <div>
            <section className="home-hero">
                <div className="home-hero__content">
                    <h1 className="heading-primary">Welcome, My name is Billal Mohammad</h1>
                    <div className="home-hero__info">
                        <p className="text-primary">I am a passionate frontend developer based in London, UK. I specialities in
                            <strong> React JS</strong> and <strong>Tailwind CSS</strong>. My goal is to build apps that can
                            not only benefit users with their day to day life but to enhance their living overall.
                        </p>
                    </div>

                    <div className="home-hero__cta">
                        <Link to='projects' className="btn btn--bg">See my projects</Link>
                    </div>
                </div>

                <div className="home-hero__socials">
                    <div className="home-hero__social">
                        <a href="https://www.linkedin.com/in/billal-mohammad/" className="home-hero__social-icon-link"
                            target="_blank">
                            <img src="../../assets/img/icons/linkedin-ico.png" alt="icon" className="home-hero__social-icon" />
                        </a>
                    </div>

                    <div className="home-hero__social">
                        <a href="https://github.com/bilmoh" className="home-hero__social-icon-link" target="_blank">
                            <img src="../../assets/img/icons/github-ico.png" alt="icon" className="home-hero__social-icon" />
                        </a>
                    </div>

                    <div className="home-hero__social">
                        <a href="https://x.com/bilmoh_codes" className="home-hero__social-icon-link" target="_blank">
                            <img src="../../assets/img/icons/twitter-ico.png" alt="icon" className="home-hero__social-icon" />
                        </a>
                    </div>

                    {/* <div className="home-hero__social">
                        <a href="https://www.youtube.com/channel/UClP-44q4BVM9cWMxkTauXJQ" className="home-hero__social-icon-link"
                            target="_blank">
                            <img src="../../assets/img/icons/yt-ico.png" alt="icon" className="home-hero__social-icon" />
                        </a>
                    </div> */}
                </div>

                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </section>
            <section id="projects" className="projects sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-bg">
                        <span className="heading-sec__main">Projects</span>
                        <span className="heading-sec__sub">
                            All my projects include links to the code and live
                            version. Click the button to learn more about each one.
                        </span>
                    </h2>

                    <div className="projects__content">
                        <div className="projects__row">
                            <div className="projects__row-img-cont">
                                <img src="../../assets/img/quiz.jpg" alt="Software Screenshot" className="projects__row-img"
                                    loading="lazy" />
                            </div>

                            <div className="projects__row-content">
                                <h3 className="projects__row-content-title">
                                    Note Taking App
                                </h3>
                                <p className="projects__row-content-desc">
                                    Quizzical is a simple quiz app that lets you
                                    select alternatives and then gives you a score.
                                    It's built with functional React components.
                                </p>
                                <a href="/src/projects/project-3.html" className="btn btn--med btn--theme dynamicBgClr">Learn
                                    more</a>
                            </div>
                        </div>

                        <div className="projects__row">
                            <div className="projects__row-img-cont">
                                <img src="../../assets/img/quiz.jpg" alt="Software Screenshot" className="projects__row-img"
                                    loading="lazy" />
                            </div>
                            <div className="projects__row-content">
                                <h3 className="projects__row-content-title">
                                    Van Rental App
                                </h3>
                                <p className="projects__row-content-desc">
                                    A Chrome Extension that gives you an overview
                                    over the current time, how the weather is like
                                    and how Dogecoin is performing. Interacts with
                                    multiple APIs using async JS.
                                </p>
                                <a href="/src/projects/project-3.html" className="btn btn--med btn--theme dynamicBgClr">Learn
                                    more</a>
                            </div>
                        </div>
                        <div className="projects__row">
                            <div className="projects__row-img-cont">
                                <img src="../../assets/img/quiz.jpg" alt="Software Screenshot" className="projects__row-img"
                                    loading="lazy" />
                            </div>
                            <div className="projects__row-content">
                                <h3 className="projects__row-content-title">
                                    Quizz App
                                </h3>
                                <p className="projects__row-content-desc">
                                    Quizzical is a simple quiz app that lets you
                                    select alternatives and then gives you a score.
                                    It's built with functional React components.
                                </p>
                                <a href="/src/projects/project-3.html" className="btn btn--med btn--theme dynamicBgClr">Learn
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main">About Me</span>
                        <span className="heading-sec__sub">
                            <p>I'm a frontend developer based in London, UK. I enjoy creating applications that address
                                real-world issues and provide a delightful user experience. My specialties include JavaScript,
                                React JS, and Styled Components.</p>
                        </span>
                    </h2>

                    <div className="about__content">
                        <div className="about__content-main">
                            <h3 className="about__content-title">Get to know me!</h3>
                            <div className="about__content-details">
                                <p className="about__content-details-para">My background is in I.T and graphic
                                    design. I have a bachelor's degree in Computer Science from University of Roehamton.
                                    When I'm not working on projects, I enjoy playing games on my console, watching
                                    anime/shows/movies, going to the gym and exploring the great
                                    outdoors with or without my cat, marbles.</p>
                            </div>
                            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
                        </div>

                        <div className="about__content-skills">
                            <h3 className="about__content-title">My Skills</h3>
                            <div className="skills">
                                <div className="skills__skill">HTML</div>
                                <div className="skills__skill">CSS</div>
                                <div className="skills__skill">JavaScript</div>
                                <div className="skills__skill">React</div>
                                <div className="skills__skill">Git</div>
                                <div className="skills__skill">Figma</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact sec-pad dynamicBg">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main heading-sec__main--lt">Contact</span>
                        <span className="heading-sec__sub heading-sec__sub--lt">
                            Please reach out if you have any questions! I'm happy to
                            jump on a video call to brainstorm projects and ideas.
                            Send me an email at billalmohammad2898@gmail.com or call me directly
                            at 07951505988.
                        </span>

                    </h2>
                </div>
            </section>

        </div>




    )
}