import {NavLink} from "react-router-dom";
import "../../../index.scss"
import {animeData} from "../../../Store/storeAnime";
import {IAnimeItem} from "../../../Interfaces/IAnimeItem";

export default function NavBar() {

    const rand = (arr: IAnimeItem[]) => {
        return Math.floor(Math.random() * arr.length)
    }

    const randIdAnime = () => rand(animeData) + 1

    return (
        <>
            <nav className="header__navbar">
                <ul className="header__list">
                    <li className="header__list_item">
                        <NavLink to="/" className={({isActive}) =>
                            isActive ? "header__list_link_active" : "header__list_link"
                        }>
                            HOME
                        </NavLink>
                    </li>
                    <li className="header__list_item">
                        <NavLink to="/animelist" className={({isActive}) =>
                            isActive ? "header__list_link_active" : "header__list_link"
                        }>
                            ANIME
                        </NavLink>
                    </li>
                    <li className="header__list_item">
                        <NavLink to={`/animelist/${randIdAnime()}`} className={({isActive}) =>
                            isActive ? "header__list_link_active" : "header__list_link"
                        }>
                            RANDOM
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}