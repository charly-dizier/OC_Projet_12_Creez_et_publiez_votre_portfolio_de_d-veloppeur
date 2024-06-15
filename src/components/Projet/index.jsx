import Card from "../Card"
import data from "../../utils/data/project.json"
import { useEffect, useState } from "react"

function Projet() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        setCardsData(data);
    }, []);

    return (
        <section className="projet">
            <h2 className="projet_title">Projet du parcour Intégrateur Web</h2>
            <div className="projet_card">
                {cardsData.map((card, id) => (
                    <Card key={id} data={card} />
                ))}

            </div>
        </section>
    )
}

export default Projet