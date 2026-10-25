import { useAuth } from '../../hooks/useAuth';
import { Button } from '../common/Button';
import { User, LogOut, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="h-16 border-b border-white/5 bg-[#07080c]/80 backdrop-blur-md sticky top-0 z-20 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold">
          PRO AUDIO ENGINE 2.0
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors">
          <Bell size={18} />
        </button>

        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-semibold text-slate-200">{user.username}</span>
            </div>
            <button
              onClick={logout}
              className="text-slate-400 hover:text-red-400 p-2 rounded-xl hover:bg-white/5 transition-colors"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
