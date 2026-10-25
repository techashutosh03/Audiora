import { useState, useContext } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { usePlaylist } from '../../hooks/usePlaylist';
import { NotificationContext } from '../../contexts/NotificationContext';

export const CreatePlaylist = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { createPlaylist } = usePlaylist();
  const { addNotification } = useContext(NotificationContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await createPlaylist(name, description);
    addNotification(`Playlist '${name}' created successfully!`, 'success');
    setName('');
    setDescription('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Playlist">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Playlist Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="My Ambient Collection"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Description (Optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Give your playlist a descriptive mood..."
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Create Playlist
          </Button>
        </div>
      </form>
    </Modal>
  );
};
