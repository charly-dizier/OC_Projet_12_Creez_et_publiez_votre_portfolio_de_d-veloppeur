import bio from '../../assets/img/bio.png';

function Bio() {
    return (
        <>
        <section className="bio" id="bio">
            <div className="bio_id">
                <div className="bio_id-title">
                    <h1>Charly Dizier</h1>
                    <h2>Developpeur Web</h2>
                </div>
                <div className="bio_id-img">
                    <img src={bio} alt="portai"></img>
                </div>
            </div>
            <h2>Bienvenue sur mon portfolio</h2>
            <div className="bio_txt">
                <p>Après plus de dix ans de vie professionnel dans le secteur de la vente, j'ai décidé qu'il était temps pour moi d'explorer de nouveau horizons.</p>
                <p>Gravitant dans le monde de l'informatique, à titre personnel et ludique depuis mon enfance, j'ai entrepris de transformer cette passion en carrière professionnel en me reconvertissant dans le développement web.</p>
                <p>Au coté d'OpenclassRoom, j'ai suivi une formation d'Intégrateur Web aboutissant sur un titre RNCP de niveau 5 (équivalent BAC +2).</p>
                <p>Fort de cette expérience, je me lance un nouveau défis: une formation de Developpeur d'Application React (RNCP niveau 6, équivalent BAC+3/4). </p>
            </div> 
            <div id="navSkills"></div>
        </section>
       
        </>
    )
}

export default Bio