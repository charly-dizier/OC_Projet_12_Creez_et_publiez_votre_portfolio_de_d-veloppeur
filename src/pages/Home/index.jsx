import Bio from "../../components/Bio"
import Contact from "../../components/Contact"
import Skills from "../../components/Skills"
import Projet from "../../components/Projet"

function Home() {
    return (
        <div className="home" id="home">
            <section id="bio">
                <Bio />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projet">
                <Projet />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home