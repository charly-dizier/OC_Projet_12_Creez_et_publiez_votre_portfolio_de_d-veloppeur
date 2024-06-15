import Bio from "../../components/Bio"
import Skills from "../../components/Skills"
import Projet from "../../components/Projet"
import Contact from "../../components/Contact"

function Home() {
    return (
        <div className="home" id="home">
            <section id="bio">
                <Bio />
            </section>
            <section id="skills" className="skills">
                <Skills />
            </section>
            <section id="projet">
                <Projet />
            </section>
            <section id="contact" className="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home