import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { Outlet } from 'react-router-dom';

export default function Protected() {
  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
