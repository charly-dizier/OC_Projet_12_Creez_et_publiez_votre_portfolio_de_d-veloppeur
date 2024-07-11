import IconSkills from "../IconSkills";
import data from "../../utils/data/skill.json"

function Skills() {
    return (
        <>
            <div className="skills_container">      
                {data.map((data) => {
                    return (
                        <IconSkills 
                            key={data.id}
                            title={data.title}
                            icon={data.icon}
                        />
                    )
                })}
            </div>
            <div id="navProjet"></div>
        </>
    )
}

export default Skills