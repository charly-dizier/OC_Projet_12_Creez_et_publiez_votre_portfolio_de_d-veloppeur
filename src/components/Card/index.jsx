// import { Link } from 'react-router-dom'

function Card({ data }) {

    return (
        <div className="card">
            <div className="card_img">
                <img src={data.image} alt={data.title} />
            </div>
            <div className="card_txt">
                <div className="card_txt_head">
                    <div className="card_txt_head-title">
                        <h3>{data.title}</h3>
                        {/* <div className="card_txt_head-links">
                            {data.links.map((link, id) => (
                                <Link key={id} to={link.url} target="_blank">
                                    <img className='card_txt_head-links-icon' src={link.icon} alt="Icon de lien" />
                                </Link>
                            ))}
                        </div>  */}
                    </div>
                    <ul className="card_txt_head-iconSkills">
                        {data.icons.map((icon, id) => (
                            <li key={id}>
                                <img src={icon} alt={`Icon ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card_txt_desc">
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card