import bio from '../../assets/img/bio.webp';

function Bio() {

    return (
        <div className="bio" id="bio">
            <div className="bio__id">
                <div className="bio__id-title">
                    <h1>Charly Dizier</h1>
                    <h2>Developpeur Web</h2>
                </div>
                <div className="bio__id-img">
                    <img src={bio} alt="portai"></img>
                </div>
            </div>
            <h2 className="bio__section-title">Bienvenue sur mon portfolio</h2>
            <div className="bio__txt">
                <p>Après plus de dix ans de vie professionnelle dans le secteur de la vente, j'ai décidé qu'il était temps pour moi d'explorer de nouveaux horizons.</p>
                <p>Gravitant dans le monde de l'informatique, à titre personnel et ludique depuis mon enfance, j'ai entrepris de transformer cette passion en carrière professionnelle en me reconvertissant dans le développement web.</p>
                <p>Aux côtés d'OpenclassRoom, j'ai suivi une formation d'Intégrateur Web aboutissant sur un titre RNCP de niveau 5 (équivalent BAC +2), qui m'a permis acquérir les bases du développement front-end ainsi qu'un ensemble de compétences que vous pourrez retrouver dans la section Skills.</p>
                <p>Fort de cette expérience, je me lance un nouveau défi : une formation de Développeur d'Application React (RNCP niveau 6, équivalent BAC+3/4).</p>
            </div> 
            <div id="navSkills"></div>
        </div>
    )
}

export default Bio