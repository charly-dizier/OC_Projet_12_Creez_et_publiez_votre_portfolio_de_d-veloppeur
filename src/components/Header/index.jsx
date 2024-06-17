import { HashLink as NavLink } from 'react-router-hash-link';

function Header() {

    return (
        <header className="header">
            <div className="header-container">
                <div className="header_logo">
                    <NavLink className='header_logo-link' smooth to="/#home">
                        <p>Charly Dizier</p>
                    </NavLink>
                </div>
                <nav className="header_nav">
                    <NavLink className="header_nav-link" smooth to="/#bio">
                        <p>Biographie</p>
                    </NavLink>
                    <NavLink className="header_nav-link" smooth to="/#skills">
                        <p>Skills</p>
                    </NavLink>
                    <NavLink className="header_nav-link" smooth to="/#projet">
                        <p>Projet</p>
                    </NavLink>
                    <NavLink className="header_nav-link" smooth to="/#contact">
                        <p>Contact</p>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header