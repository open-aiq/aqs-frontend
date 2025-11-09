import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid place-items-center p-4">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}
