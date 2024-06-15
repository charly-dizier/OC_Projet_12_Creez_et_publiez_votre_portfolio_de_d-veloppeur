import IconSkills from "../IconSkills";

import data from "../../utils/data/skill.json"

function Skills() {
    return (
        <section className="skills">
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
        </section>
    )
}

export default Skills