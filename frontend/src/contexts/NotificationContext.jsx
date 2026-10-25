import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeNotification(id);
    }, 4000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="pointer-events-auto bg-indigo-950/90 text-white border border-indigo-500/30 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md animate-fade-in flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <span className="text-sm font-medium">{n.message}</span>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
