import React, { useState } from "react";

import { useParams } from "react-router-dom";

export default function ProjectDetails() {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    React.useEffect(() => {
        fetch("../src/projects.json")
            .then(res => res.json())
            .then(data => {
                const project = data.find(p => p.id === parseInt(id, 10))
                setProject(project)
            })
            .catch(error => console.error("Error fetching project details", error))
    }, [id])

    if (!project) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <section className="project-details">
            <div className="project-cs-hero__content project-cs-hero">
                <div >
                    <h1 className="heading-primary">{project.title}</h1>
                    <div className="project-cs-hero__info">
                        <p className="text-primary">
                            {project.intro}
                        </p>
                    </div>
                </div>
                <div className="project-cs-hero__cta">
                    <a href={project.liveLink} className="btn btn--bg" target="_blank">Live Link</a>
                </div>
            </div>

            <div className="main-container">
                <div className="project-details__content">
                    <div className="project-details__showcase-img-cont">
                        <img src={project.featuredImg} alt={`${project.title} screenshot`} className="project-details__showcase-img" />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                            <h3 className="project-details__content-title">Project Overview</h3>
                            <p className="project-details__desc-para">
                                {project.problemStatement}
                            </p>
                            <p className="project-details__desc-para">
                                {project.challengesSolutions}
                            </p>

                            <div className="features-list">
                                <h4>Features:</h4>
                                <ul>
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <p className="project-details__desc-para">
                                {project.ImpactFeedback}
                            </p>

                            <div className="project-details__tools-used">
                                <h3 className="project-details__content-title">Technologies Used</h3>
                                <div className="skills">
                                    {project.tags.map((tag, index) => (
                                        <div key={index} className="skills__skill">{tag}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="project-details__links">
                                <h3 className="project-details__content-title">See Live</h3>
                                <a href={project.liveLink} className="btn btn--med btn--theme project-details__links-btn" target="_blank">Live Link</a>
                                <a href={project.codeLink} className="btn btn--med btn--theme-inv project-details__links-btn" target="_blank">Code Link</a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )

}