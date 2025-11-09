import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Welcome to OpenAIQ</h1>
      <p className="text-muted-foreground">Manage your air-quality devices and view PM2.5 measurements.</p>
      <div className="flex gap-3">
        <Button asChild>
          <Link to="/devices">View Devices</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/devices/new">Register Device</Link>
        </Button>
      </div>
    </section>
  );
}
