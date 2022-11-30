import Logo from "../Header/Logo/Logo"
import NavBar from "../Header/NavBar/NavBar"
import Society from "../Header/Society/Society"
import "../../index.scss"
import {FC} from "react";

const Header: FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Logo/>
                    <NavBar/>
                    <Society/>
                </div>
            </div>
        </header>
    )
}

export default Header;