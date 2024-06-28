import Bio from "../../components/Bio"
import Skills from "../../components/Skills"
import Projects from "../../components/Projects"
import Contact from "../../components/Contact"

function Home() {
    return (
        <main className="home" id="home">
            <section id="bio">
                <Bio />
            </section>
            <section className="skills">
                <Skills />
            </section>
            <section className="projects">
                <Projects />
            </section>
            <section className="contact">
                <Contact />
            </section>
        </main>
    )
}

export default Home