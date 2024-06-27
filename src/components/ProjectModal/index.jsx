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

Modal.setAppElement('#root');

function ProjectModal({ isOpen, project, onClose }) {

    // Fonction pour convertir les \n en <br /> du fichier json
    const formatDescription = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <Modal
            isOpen={!!project}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Détails du projet"  
        >
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