import {Link} from "react-router-dom";
import "../../../index.scss"

export default function Society() {
    return (
        <>
            <div className="society">
                <Link to="/"><img src="../../public/Image/icons/vk.svg" alt="vk" className="society__img"/></Link>
                <Link to="/"><img src="../../public/Image/icons/telegram.svg" alt="telegram" className="society__img"/></Link>
            </div>
        </>
    )
}