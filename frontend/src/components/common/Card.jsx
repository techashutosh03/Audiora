export const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`glass-panel glass-panel-hover rounded-2xl p-4 cursor-pointer relative overflow-hidden group ${className}`}
    >
      {children}
    </div>
  );
};
