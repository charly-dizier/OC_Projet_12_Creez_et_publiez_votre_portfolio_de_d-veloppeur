function IconSkills({ title, alt, icon}) {

    return (
        <div className="skills_icon">
            <img src={icon} alt={alt}></img>
            <p>{title}</p>
        </div>
    )
}

export default IconSkills