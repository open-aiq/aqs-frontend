import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export default function AuthedLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <main className="flex-1 px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
