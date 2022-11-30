import {NavLink} from "react-router-dom";
import "../../../index.scss";
import {animeData} from "../../../Store/storeAnime";
import {IAnimeItem} from "../../../Interfaces/IAnimeItem";
import {FC, useState} from "react";

const NavBar: FC = () => {

    const [randIdAnime, setRandIdAnime] = useState<number>(0);

    setTimeout(() => {
        const rand = (arr: IAnimeItem[]) => {
            return Math.floor(Math.random() * arr.length);
        }
        setRandIdAnime(rand(animeData) + 1);
    }, 500)

    // useEffect(() => {
    //     setRandIdAnime(rand(animeData) + 1)
    // }, [randIdAnime])

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
                        <NavLink to={`/animelist/${randIdAnime}`} className={({isActive}) =>
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

export default NavBar;