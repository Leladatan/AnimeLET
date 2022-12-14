import "../../../index.scss"
import vk from "../../../Image/icons/vk.svg"
import tel from "../../../Image/icons/telegram.svg"
import {FC} from "react";

const Society: FC = () => {
    return (
        <>
            <div className="society">
                <a href="https://vk.com"><img src={vk} alt="vk" className="society__img"/></a>
                <a href="https://telegram.org"><img src={tel} alt="telegram" className="society__img"/></a>
            </div>
        </>
    )
}

export default Society;