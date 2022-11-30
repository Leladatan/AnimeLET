import {Link} from "react-router-dom";
import "../../../index.scss"
import {FC} from "react";

const Logo: FC = () => {
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

export default Logo;