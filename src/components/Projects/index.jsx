import Card from "../Card"
import projectsData from "../../utils/data/project.json"
import { useState } from "react"
import ProjectModal from "../ProjectModal";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <h2>Principaux projets du parcours Intégrateur Web</h2>
            <div className="projects__cards">
                {projectsData.map((project) => (
                    <Card 
                        key={project.id} 
                        project={project}
                        onClick={() => openModal(project)}
                    />
                ))}
            </div>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </>
    )
}

export default Projects