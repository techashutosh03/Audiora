import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { Player } from '../player/Player';
import { CreatePlaylist } from '../playlist/CreatePlaylist';

export const Layout = ({ children }) => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col">
      <Sidebar onOpenCreatePlaylist={() => setIsCreateOpen(true)} />

      <div className="pl-64 flex-1 flex flex-col min-h-screen pb-28">
        <Header />
        <main className="flex-1 p-8 relative z-10">{children}</main>
        <Footer />
      </div>

      <Player />
      <CreatePlaylist isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </div>
  );
};
