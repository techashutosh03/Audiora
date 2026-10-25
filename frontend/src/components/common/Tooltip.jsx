import { useState } from 'react';

export const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-40 animate-fade-in border border-white/10">
          {text}
        </div>
      )}
    </div>
  );
};
