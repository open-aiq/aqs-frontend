import { Link, NavLink } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-semibold tracking-tight">
            OpenAIQ
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-neutral-600">
            <NavLink to="/" className={({ isActive }) => `hover:text-black ${isActive ? 'text-black' : ''}`} end>
              Dashboard
            </NavLink>
            <NavLink to="/devices" className={({ isActive }) => `hover:text-black ${isActive ? 'text-black' : ''}`}>
              Devices
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
