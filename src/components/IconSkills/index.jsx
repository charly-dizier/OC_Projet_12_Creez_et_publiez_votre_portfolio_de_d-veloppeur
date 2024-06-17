function IconSkills({ title, alt, icon}) {

    return (
        <div className="skills_icon">
            <img src={icon} alt={alt}></img>
            <h3>{title}</h3>
        </div>
    )
}

export default IconSkills