import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function DevicesPage() {
  // Placeholder static content; will wire to backend later
  const devices: Array<{ id: string; name: string; location?: string }> = [];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Devices</h1>
        <Button asChild>
          <Link to="/devices/new">Register Device</Link>
        </Button>
      </div>

      {devices.length === 0 ? (
        <div className="rounded-md border border-dashed p-8 text-center text-neutral-600">No devices yet. Register your first device.</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.location || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </section>
  );
}
