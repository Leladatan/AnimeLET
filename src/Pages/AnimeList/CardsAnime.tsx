import {IAnimeItem} from "../../Interfaces/IAnimeItem";
import {Link} from "react-router-dom";


interface IAnimeItemProps {
    item: IAnimeItem;
}

export default function CardsAnime(props: IAnimeItemProps) {
    return (
        <>
            <div className="card">
                <div className="card__wrap">
                    <Link to={props.item.link}>
                        <img className="card__img" src={props.item.img} alt={props.item.title}/>
                    </Link>
                </div>
                <div className="card__info">
                    <h2 className="card__title">{props.item.title}</h2>
                </div>
            </div>
        </>
    );
}