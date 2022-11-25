import "../../../index.scss"
import vk from "../../../Image/icons/vk.svg"
import tel from "../../../Image/icons/telegram.svg"

export default function Society() {
    return (
        <>
            <div className="society">
                <a href="https://vk.com/id_samurai123"><img src={vk} alt="vk" className="society__img"/></a>
                <a href="https://telegram.org/@samurai123_a10"><img src={tel} alt="telegram" className="society__img"/></a>
            </div>
        </>
    )
}