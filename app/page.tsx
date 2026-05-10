'use client';

import { useState } from 'react';
import {
  NavigateToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from '@wacht/nextjs';
import Link from 'next/link';

export default function Home() {
  const [redirecting, setRedirecting] = useState(false);

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Wacht Starter · Next.js</h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        Hosted Wacht auth wired up with <code>wachtMiddleware</code>,{' '}
        <code>DeploymentProvider</code>, and the <code>requireAuth()</code> server helper.
      </p>

      <SignedIn>
        <p>You are signed in.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
          <UserButton showName={false} />
          <Link href="/account">Open account →</Link>
        </div>
      </SignedIn>

      <SignedOut>
        {redirecting ? <NavigateToSignIn /> : null}
        <button
          type="button"
          onClick={() => setRedirecting(true)}
          style={{
            padding: '0.6rem 1.2rem',
            border: '1px solid #ddd',
            background: '#111',
            color: '#fff',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Sign in
        </button>
      </SignedOut>
    </main>
  );
}
