import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] grid place-items-center text-center">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">404 — Page not found</h1>
        <p className="text-neutral-600">The page you’re looking for doesn’t exist.</p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
