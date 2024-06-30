import React from "react";

export default function Projects() {
    return (
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
    )
}