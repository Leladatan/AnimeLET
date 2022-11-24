import { ReactComponent as VkIcon } from '../../../assets/images/icons/vk.svg';
import { ReactComponent as TgIcon } from '../../../assets/images/icons/telegram.svg';

export default function Society() {
  return (
    <div className="society">
      <a href="https://vk.com/id_samurai123">
        <VkIcon className="society__img" />
      </a>
      <a href="https://telegram.org/@samurai123_a10">
        <TgIcon className="society__img" />
      </a>
    </div>
  );
}
