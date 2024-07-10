import Card from "../Card"
import projectsData from "../../utils/data/project.json"
import { useState } from "react"
import ProjectModal from "../ProjectModal";

function Projects() {

    // Declaration du state de selectedProject
    const [selectedProject, setSelectedProject] = useState(null);

    // Fonction d'ouverture de la modal et mise a jour du state
    const openModal = (project) => {
        setSelectedProject(project);
    };

    // Fonction de fermeture de la modal et réinitialisation su state
    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <h2>Principaux projets du parcours<br /> Intégrateur Web</h2>
            <div className="projects__cards">
                {projectsData.map((project) => (
                    <Card 
                        key={project.id} 
                        project={project}
                        onClick={() => openModal(project)}
                    />
                ))}
            </div>
            {/* Rendu conditionnel du composant ProjectModal. 
            On s'assure qu'un projet a bien été selectionné avant d'ouvrir la modal, 
            puis on lui passe le projet selectionné en props ainsi que la fonction de fermeture. */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
            <div id="navContact"></div>
        </>
    )
}

export default Projects