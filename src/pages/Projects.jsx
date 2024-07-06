import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 8;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../../projects.json");
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
                                <img src={project.mainImg} alt={`${project.title} Screenshot`} className="projects__row-img" loading="lazy" />
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
    );
}
