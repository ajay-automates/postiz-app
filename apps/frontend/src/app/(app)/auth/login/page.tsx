'use client';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { Login } from '@gitroom/frontend/components/auth/login';

export default function LoginPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      window.location.href = '/launches';
    }
  }, []);

  return <Login />;
}
