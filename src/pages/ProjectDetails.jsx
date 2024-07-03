import React, { useState } from "react";

import { useParams } from "react-router-dom";

export default function ProjectDetails() {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    React.useEffect(() => {
        fetch("../projects.json")
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
            <div className="project-cs-hero__content">
                <h1 className="heading-primary">{project.title}</h1>
                <div className="project-cs-hero__info">
                    <p className="text-primary">
                        {project.intro}
                    </p>
                </div>
                <div className="project-cs-hero__cta">
                    <a href={project.liveLink} className="btn btn--bg" target="_blank">Live Link</a>
                </div>
            </div>
            <div className="main-container">
                <div className="project-details__content">
                    <div className="project-details__showcase-img-cont">
                        <img src={project.mainImg} alt={`${project.title} screenshot`} className="project-details__showcase-img" />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                            <h3 className="project-details__content-title">Project Overview</h3>
                            <p className="project-details__desc-para">
                                {project.description1}
                            </p>
                            <p className="project-details__desc-para">
                                {project.description2}
                            </p>
                        </div>

                        <div className="project-details__tools-used">
                            <h3 className="project-details__content-title">Tools Used</h3>
                            <div className="skills">
                                {project.tags.map((tag, index) => (
                                    <div key={index} classNameName="skills__skill">{tag}</div>
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
        </section>
    )

}