import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function AuthedLayout() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
