import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '30px',
        border: '3px solid rgb(255, 255, 255)',
        padding: '0px',
        margin: '0px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '20'
    }
};

// Définition de l'élément racine pour l'accessibilité de la modal
Modal.setAppElement('#root');

function ProjectModal({ project, onClose }) {

    // Fonction pour convertir les sauts de ligne (\n) du fichier JSON, en éléments <br /> dans le texte
    const formatDescription = (text) => {
        // split divise 'text' en un tableau de sous-chaînes en utilisant ('\n') comme séparateur.
        // puis on map chaque éléments du tableau afin de leurs attribuer individuellemnt deux arguments.
        // 'line' = la sous-chaîne actuelle et 'index' = l'index de la sous-chaîne dans le tableau.
        return text.split('\n').map((line, index) => (
            // React.Fragment est un conteneur léger qui ne produit pas d'éléments DOM supplémentaires.
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <Modal
            isOpen={!!project} // La modal est ouvert si un projet est sélectionné
            onRequestClose={onClose} // Fonction appelée pour fermer l amodal
            style={customStyles} // Styles personnalisés de la modal
            contentLabel="Détails du projet" // Label pour l'accessibilité
        >
            {/* Rendu conditionnel qui s'assure que project est bien défini */}
            {project && (
                <div className="modal-content" onClick={onClose}>
                    <div className="modal-content__header">
                        <h3 className="modal-content__header-title">{project.title}</h3>
                        <ul className="modal-content__header-link">Liens
                            {project.links.map((link, id) => (
                                <li key={id} className="modal-content__header-link--item"> 
                                    <Link to={link.url} target="_blank" rel="noopener noreferrer">
                                        <img src={link.icon} alt={`Link ${id}`} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img className="modal-content__img" src={project.image_modal} alt={project.title} />
                    <div className="modal-content__title">
                        <h4>{project.titleModal}</h4>
                        <ul className="modal-content__title-icon">
                            {project.icons.map((icon, id) => (
                                <li key={id} className="modal-content__title-icon--item">
                                    <img src={icon} alt={`Icon ${id}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="modal-content__description">{formatDescription(project.descriptionModal)}</p>
                    <ul className="modal-content__missions">Missions :
                        {project.missionsModal.map((mission, index) => (
                            <li className="modal-content__missions-item" key={index}>
                                {formatDescription(mission)}
                            </li>
                        ))}
                    </ul>
                    <ul className="modal-content__objectif">Objectif pédagogique :
                        {project.objectifModal.map((objectif, index) => (
                            <li className="modal-content__obectif-item" key={index}>
                                {objectif}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Modal>
    );
}

export default ProjectModal;