import { headers } from 'next/headers';
import { NavigateToSignIn } from '@wacht/nextjs';
import { auth } from '@wacht/nextjs/server';

export default async function AccountPage() {
  const wacht = auth(await headers());

  if (!wacht.isAuthenticated || !wacht.userId) {
    return <NavigateToSignIn />;
  }

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '720px', margin: '0 auto' }}>
      <h1>Account</h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        This page is protected by <code>wachtMiddleware</code> and uses{' '}
        <code>auth(await headers())</code> on the server.
      </p>
      <pre
        style={{
          background: '#fafafa',
          border: '1px solid #eee',
          padding: '1rem',
          borderRadius: 4,
          overflowX: 'auto',
        }}
      >
        {JSON.stringify(
          {
            userId: wacht.userId,
            organizationId: wacht.organizationId,
            workspaceId: wacht.workspaceId,
          },
          null,
          2,
        )}
      </pre>
    </main>
  );
}
