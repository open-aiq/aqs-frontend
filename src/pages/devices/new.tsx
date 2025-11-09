import type { FormEvent } from 'react';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

type DevicePlacement = 'indoor' | 'outdoor';

interface Device {
  name: string;
  location?: string;
  secret?: string;
  placement: DevicePlacement;
  info?: string;
}

export default function DeviceNewPage() {
  const [submitted, setSubmitted] = useState<Device | null>(null);
  const [placement, setPlacement] = useState<DevicePlacement>('indoor');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const location = String(formData.get('location') || '').trim() || undefined;
    const info = String(formData.get('info') || '').trim() || undefined;

    const secret = `dev_${Math.random().toString(36).slice(2, 10)}`;

    setSubmitted({ name, location, secret, placement, info });
  }

  if (submitted) {
    return (
      <section className="space-y-4">
        <h1 className="text-xl font-semibold">Device Registered</h1>
        <p className="text-muted-foreground">Copy and store this secret now. It may only be shown once later.</p>
        <div className="rounded-md border bg-card p-4 space-y-2">
          <div className="text-sm text-muted-foreground">Device Secret</div>
          <div className="mt-1 font-mono text-sm break-all">{submitted.secret}</div>
          <div className="text-sm text-muted-foreground">Placement</div>
          <div className="mt-1 text-sm capitalize">{submitted.placement}</div>
          {submitted.info ? (
            <>
              <div className="text-sm text-muted-foreground">Additional Info</div>
              <div className="mt-1 text-sm whitespace-pre-wrap">{submitted.info}</div>
            </>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Register Device</h1>
      <form onSubmit={onSubmit} className="space-y-4 max-w-md">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="e.g., Living Room" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location (optional)</Label>
          <Input id="location" name="location" placeholder="City, Area" />
        </div>
        <div className="space-y-2">
          <Label>Placement</Label>
          <RadioGroup value={placement} onValueChange={(v) => setPlacement(v as DevicePlacement)} className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <RadioGroupItem id="placement-indoor" value="indoor" />
              <Label htmlFor="placement-indoor">Indoor</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="placement-outdoor" value="outdoor" />
              <Label htmlFor="placement-outdoor">Outdoor</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-1">
          <Label htmlFor="info">Additional information (optional)</Label>
          <Textarea id="info" name="info" placeholder="Anything you'd like us to know..." rows={4} />
        </div>
        <div className="flex gap-2">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </section>
  );
}
