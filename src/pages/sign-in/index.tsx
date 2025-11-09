import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div className="min-h-screen grid place-items-center p-4">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
