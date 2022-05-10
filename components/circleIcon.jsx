import CenterText from './centerText';
import Icon from './icon';

const CircleIcon = ({ icon }) => {
  return (
    <div className="w-20 h-20 text-5xl mb-1 bg-gray-300 rounded-full">
      <CenterText className="text-gray-800">
        <Icon>
          {icon}
        </Icon>
      </CenterText>
    </div>
  );
};

export default CircleIcon;
