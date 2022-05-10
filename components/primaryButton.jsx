const PrimaryButton = ({ label, onClick }) => {
  return (
    <button
      className="w-full text-xl p-8 bg-neutral-600 rounded-2xl"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
