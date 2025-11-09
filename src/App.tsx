import { RedirectToSignIn } from '@clerk/clerk-react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/protected';
import AuthedLayout from './layouts/authed-layout';
import DashboardPage from './pages/index';
import DevicesPage from './pages/devices/index';
import DeviceNewPage from './pages/devices/new';
import NotFoundPage from './pages/404';
import SignInPage from './pages/sign-in';
import SignUpPage from './pages/sign-up';

export default function App() {
  return (
    <Routes>
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />

      <Route element={<Protected />}>
        <Route element={<AuthedLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/devices/new" element={<DeviceNewPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>

      {/* Fallback for unknown routes when signed out: redirect to sign-in */}
      <Route path="*" element={<RedirectToSignIn />} />
    </Routes>
  );
}
