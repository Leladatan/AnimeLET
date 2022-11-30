import {IAnimeItem} from "../../Interfaces/IAnimeItem";
import {FC} from "react";
import {Link} from "react-router-dom";


interface Props {
    item: IAnimeItem;
}

const AnimeCard: FC<Props> = ({item}) => {
    return (
        <>
            <div className="card">
                <div className="card__wrap">
                    <Link to={`/animelist/${item.id}`}>
                        <img className="card__img" src={item.img} alt={item.title}/>
                        <div className="poster">
                            <svg className="star-rate" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.4713 15L4.47223 8.98092L0 5.46228H5.64194L7.45777 0L9.15645 5.46228H15L10.275 9.05924L12.1225 15L7.37643 11.2659L2.4713 15Z" fill="#9370DB"/>
                            </svg>
                            <span className="rate-anime">{item.rate.toFixed(1)}</span>
                        </div>
                    </Link>
                </div>
                <div className="card__info">
                    <h2 className="card__title">{item.title}</h2>
                </div>
            </div>
        </>
    );
};

export default AnimeCard;