import { NavLink } from 'react-router-dom';
import { Home, Compass, Library, Search, PlusCircle, Heart } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Sidebar = ({ onOpenCreatePlaylist }) => {
  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Discover', path: '/discover', icon: Compass },
    { label: 'Search', path: '/search', icon: Search },
    { label: 'Your Library', path: '/library', icon: Library },
  ];

  return (
    <aside className="w-64 bg-[#090a10]/95 border-r border-white/5 flex flex-col h-screen fixed left-0 top-0 z-30 p-6 backdrop-blur-xl">
      <Logo className="mb-8" />

      <nav className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-1">
            Menu
          </span>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Icon size={18} />
                {item.label}
              </NavLink>
            );
          })}
        </div>

        <div className="flex flex-col gap-1.5 pt-4 border-t border-white/5">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-1">
            My Collection
          </span>
          <button
            onClick={onOpenCreatePlaylist}
            className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all text-left"
          >
            <PlusCircle size={18} className="text-indigo-400" />
            Create Playlist
          </button>
          <NavLink
            to="/library"
            className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <Heart size={18} className="text-pink-500" />
            Liked Songs
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};
