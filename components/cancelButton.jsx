const CancelButton = ({ onClick }) => {
  return (
    <button
      className="w-full text-xl p-8 bg-neutral-400 rounded-2xl"
      onClick={onClick}
    >
      CANCEL
    </button>
  );
};

export default CancelButton;
