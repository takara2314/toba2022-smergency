const SosButton = ({ num, onClick }) => {
  return (
    <li
      className="h-24 mb-4"
      style={{
        width: `${100 / num}%`,
      }}
    >
      <button
        className="w-full h-full mb-1 bg-red-500 text-xl rounded-xl"
        onClick={onClick}
      >
        SOS
      </button>
    </li>
  );
};

export default SosButton;
