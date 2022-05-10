import Icon from "./icon";

const IconLabelButton = ({ num, icon, label, onClick }) => {
  return (
    <li
      className="h-24 mb-4"
      style={{
        width: `${100 / num}%`,
      }}
    >
      <button
        className="w-full h-full mb-1 bg-neutral-600 rounded-xl"
        onClick={onClick}
      >
        <div className="text-6xl mt-1">
          <Icon>
            {icon}
          </Icon>
        </div>
        <div className="text-lg -mt-3">
          {label}
        </div>
      </button>
    </li>
  );
};

export default IconLabelButton;
