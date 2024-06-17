function Card({ project, onClick }) {
    
    const handleCardClick = () => {
        onClick(project);
    };

    return (
        <div className="card" onClick={handleCardClick}>
            <div className="card__image">
                <img src={project.image} alt={`Illustration du site ${project.title}`} />
            </div>
            <div className="card__content">
                <div className="card__header">
                    <div className="card__title">
                        <h3>{project.title}</h3>
                    </div>
                    <ul className="card__icon-list">
                        {project.icons.map((icon, id) => (
                            <li key={id}>
                                <img src={icon} alt={`Icon ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card__description">
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;