import { Link } from "react-router-dom"

function PageNotFound() {
    return (
        <div className="error">
            <p>Erreur la page n'existe pas</p>
            <Link to="/">
                <p>Retour à l'acceuil</p>
            </Link>
        </div>
    )
}

export default PageNotFound