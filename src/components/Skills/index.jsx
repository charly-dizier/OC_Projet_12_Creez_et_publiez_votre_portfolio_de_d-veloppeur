import IconSkills from "../IconSkills";
import data from "../../utils/data/skill.json"

function Skills() {
    return (
        <>
        <h2>Skills</h2>
            <div className="skills_container">      
                {data.map((data) => {
                    return (
                        <IconSkills 
                            key={data.id}
                            title={data.title}
                            icon={data.icon}
                            alt={data.alt} 
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Skills