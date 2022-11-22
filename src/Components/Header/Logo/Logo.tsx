import {Link} from "react-router-dom";
import "../../../index.scss"

export default function Logo() {
    return (
        <>
            <div className="header__logo">
                <Link to="/" className="header__logo_link">
                    <span className="header__logo_text">Anime
                        <span>LET</span>
                    </span>
                </Link>
            </div>
        </>
    );
}