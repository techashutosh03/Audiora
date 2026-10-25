import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
      <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
        404
      </h1>
      <h2 className="text-2xl font-bold text-white">Track Not Found</h2>
      <p className="text-slate-400 text-sm max-w-sm">
        The page or audio stream you are looking for has been moved or does not exist.
      </p>
      <Link to="/">
        <Button variant="primary" className="mt-2">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;