import { Link } from "react-router-dom"

function PageNotFound() {
    return (
        <main className="error">
            <div className="error__title">
                <p className="error__title--num">404</p>
                <p className="error__title--txt">ERROR</p>
            </div>
            <div className="error__desc">
                <p className="error__desc--txt">La page que vous cherchez n'existe pas !</p>
                <Link to="/" className="error__desc--link">
                    <p>Retour à l'acceuil</p>
                </Link>   
            </div>
        </main>
    )
}

export default PageNotFound