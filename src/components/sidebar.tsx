import { Link, NavLink } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './theme-toggle';

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-60 border-r bg-background flex flex-col">
      <div className="h-14 px-4 flex items-center border-b">
        <Link to="/" className="font-semibold tracking-tight">
          OpenAIQ
        </Link>
      </div>

      <nav className="p-2 space-y-1 text-sm">
        <SidebarLink to="/" end>
          Dashboard
        </SidebarLink>
        <SidebarLink to="/devices">Devices</SidebarLink>
      </nav>

      <div className="mt-auto p-3 border-t">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <UserButton showName appearance={{ elements: { userButtonBox: { flexDirection: 'row-reverse' } } }} />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ to, end, children }: { to: string; end?: boolean; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn('flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:text-accent-foreground hover:bg-accent', isActive && 'bg-accent text-accent-foreground')
      }
    >
      {children}
    </NavLink>
  );
}
