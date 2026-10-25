import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';
import { NotificationContext } from '../contexts/NotificationContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { addNotification } = useContext(NotificationContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      addNotification('Logged in successfully!', 'success');
      navigate('/');
    } catch (err) {
      addNotification('Login failed. Check credentials.', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-[#07080c] flex items-center justify-center p-6 relative">
      <div className="glow-ambient w-96 h-96 bg-indigo-600/30 rounded-full" />
      <div className="glass-panel rounded-3xl p-8 w-full max-w-md shadow-2xl relative z-10 border border-white/10 flex flex-col gap-6">
        <Logo className="justify-center" />
        <h2 className="text-2xl font-bold text-center text-white">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@audiora.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
            Sign In
          </Button>
        </form>

        <p className="text-xs text-center text-slate-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-400 hover:underline font-semibold">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
