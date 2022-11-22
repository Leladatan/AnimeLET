import {Link} from "react-router-dom";
import "../../../index.scss"
import vk from "../../../../Image/icons/vk.svg"
import tel from "../../../../Image/icons/telegram.svg"

export default function Society() {
    return (
        <>
            <div className="society">
                <Link to="/"><img src={vk} alt="vk" className="society__img"/></Link>
                <Link to="/"><img src={tel} alt="telegram" className="society__img"/></Link>
            </div>
        </>
    )
}