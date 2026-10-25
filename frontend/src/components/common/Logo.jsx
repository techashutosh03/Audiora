import { Disc3 } from 'lucide-react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
        <Disc3 className="w-6 h-6 text-white animate-spin-slow" />
      </div>
      <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
        AUDIORA
      </span>
    </div>
  );
};
