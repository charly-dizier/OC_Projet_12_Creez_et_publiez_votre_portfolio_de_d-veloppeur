import { Link } from "react-router-dom"
import iconGit from "../../assets/icon/github.png"
import iconIn from "../../assets/icon/linkedin.png"

function Footer() {
    return (
        <section className="footer">
            <div className="footer_icon">
                <Link to='https://www.linkedin.com/in/charly-dizier/' target="_blank">
                    <img src={iconIn} alt="Icon Linkdein" />
                </Link>
                <Link to='https://github.com/charly-dizier' target="_blank">
                    <img src={iconGit} alt="Icon GitHub" />
                </Link>
            </div>
            <div className="footer_txt">
                <p>© 2024 Charly Dizier - Tous droits réservés. </p>
            </div>
        </section>
    )
}

export default Footer