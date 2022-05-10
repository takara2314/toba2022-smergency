import Link from 'next/link';
import CenterText from '../centerText';

const LabelButton = ({ num, colorClassName, label, href }) => {
  return (
    <li style={{
      width: '100%',
      height: `${100 / num}%`
    }}>
      <Link href={href}>
        <a>
          <div className={`w-full h-full text-2xl mb-1 ${colorClassName}`}>
            <CenterText>
              {label}
            </CenterText>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default LabelButton;
