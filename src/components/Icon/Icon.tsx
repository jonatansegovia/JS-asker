const Icon = ({ editing = false }) =>
  editing ? (
    <span className="material-symbols-outlined">keyboard_backspace</span>
  ) : (
    <span className="material-symbols-outlined">credit_card_gear</span>
  );

export default Icon;
