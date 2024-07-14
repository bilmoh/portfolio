import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { ContactUs } from "../components/Contact";



export default function Home() {


    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/projects.json");
                const data = await response.json();
                // Reverse the order of projects to display latest first
                setProjects(data.reverse());
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    // Use useMemo to memoize the current projects slice
    const currentProjects = useMemo(() => projects.slice(indexOfFirstProject, indexOfLastProject), [projects, currentPage]);

    const nextPage = () => {
        if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <section id="home" className="home-hero">
                <div className="home-hero__content">
                    <h1 className="heading-primary">Welcome, My name is Billal Mohammad</h1>
                    <div className="home-hero__info">
                        <p className="text-primary">I am a passionate frontend developer based in London, UK. I specialise in
                            <strong> React JS</strong>. My goal is to build apps that can
                            not only benefit users with their day-to-day life but also enhance their living overall.
                        </p>
                    </div>

                    <div className="home-hero__cta">
                        <a href="./#projects" className="btn btn--bg">See my projects</a>
                    </div>
                </div>

                <div className="home-hero__socials">
                    <div className="home-hero__social">
                        <a href="https://www.linkedin.com/in/billal-mohammad/" className="home-hero__social-icon-link"
                            target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/icons/linkedin-ico.png" alt="LinkedIn Icon" className="home-hero__social-icon" />
                        </a>
                    </div>

                    <div className="home-hero__social">
                        <a href="https://github.com/bilmoh" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/icons/github-ico.png" alt="GitHub Icon" className="home-hero__social-icon" />
                        </a>
                    </div>

                    <div className="home-hero__social">
                        <a href="https://x.com/bilmoh_codes" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/icons/twitter-ico.png" alt="Twitter Icon" className="home-hero__social-icon" />
                        </a>
                    </div>
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
                            All my projects include links to the code and live version. Click the button to learn more about each one.
                        </span>
                    </h2>

                    <div className="projects__content">
                        {currentProjects.map(project => (
                            <div key={project.id} className="projects__row">
                                <div className="projects__row-img-cont">
                                    <img src={project.coverImg} alt={`${project.title} Screenshot`} className="projects__row-img" loading="lazy" />
                                </div>
                                <div className="projects__row-content">
                                    <h3 className="projects__row-content-title">
                                        {project.title}
                                    </h3>
                                    <p className="projects__row-content-desc">
                                        {project.summary}
                                    </p>
                                    <Link to={`/projects/${project.id}`} className="btn btn--med btn--theme dynamicBgClr">
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button
                            onClick={prevPage}
                            className={`btn btn--med btn--theme dynamicBgClr btn--pagination ${currentPage === 1 ? 'disabled' : ''}`}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="pagination__page-number">{currentPage}</span>
                        <button
                            onClick={nextPage}
                            className={`btn btn--med btn--theme dynamicBgClr btn--pagination ${currentPage >= Math.ceil(projects.length / projectsPerPage) ? 'disabled' : ''}`}
                            disabled={currentPage >= Math.ceil(projects.length / projectsPerPage)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>

            <section id="about" className="about sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main">About Me</span>
                        <span className="heading-sec__sub">
                            I'm a frontend developer based in London, UK. I enjoy creating applications that address real-world issues with a delightful user experience. My specialties include JavaScript, React JS, and Styled Components.
                        </span>
                    </h2>

                    <div className="about__content">
                        <div className="about__content-main">
                            <h3 className="about__content-title">Get to know me!</h3>
                            <div className="about__content-details">
                                <p className="about__content-details-para">My background is heavily in I.T. I have a bachelor's degree in Computer Science from the University of Roehampton. When I'm not working on projects, I enjoy playing games on my console, watching shows/movies, going to the gym, and exploring the great outdoors with or without my cat, Marbles.</p>
                            </div>
                            <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
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
                            Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email by filling out the form below.
                        </span>
                        {<ContactUs />}
                    </h2>
                </div>
            </section >
        </div >
    );
}
