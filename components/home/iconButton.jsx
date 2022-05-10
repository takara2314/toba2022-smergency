import Link from 'next/link';
import Icon from '../icon';
import CenterText from '../centerText';
import CircleIcon from '../circleIcon';

const IconButton = ({ icon, label, href }) => {
  return (
    <li className="w-20">
      <Link href={href}>
        <a>
          <CircleIcon icon={icon} />
          {label}
        </a>
      </Link>
    </li>
  );
};

export default IconButton;
