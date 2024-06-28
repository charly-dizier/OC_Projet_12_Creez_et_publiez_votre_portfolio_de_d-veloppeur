import { HashLink as NavLink } from 'react-router-hash-link';

function Header() {

    return (
        <header className="header">
            <section className="header-container">
                <div className="header_logo">
                    <NavLink className='header_logo-link' smooth to="/#home">
                        <p>&lt; Charly Dizier /&gt;</p>
                    </NavLink>
                </div>
                <nav className="header_nav">
                    <NavLink className="header_nav-link" smooth to="/#bio">
                        <p>Biographie</p>
                    </NavLink>
                    <NavLink className="header_nav-link" smooth to="/#navSkills">
                        <p>Skills</p>
                    </NavLink>
                    <NavLink className="header_nav-link" smooth to="/#navProjet">
                        <p>Projet</p>
                    </NavLink>
                    <NavLink className="header_nav-link" smooth to="/#navContact">
                        <p>Contact</p>
                    </NavLink>
                </nav>
            </section>
        </header>
    )
}

export default Header