import { DeploymentInitialized, DeploymentProvider } from '@wacht/nextjs';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wacht Starter · Next.js',
  description: 'A Next.js starter with Wacht authentication wired in.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DeploymentProvider publicKey={process.env.NEXT_PUBLIC_WACHT_PUBLISHABLE_KEY!}>
          <DeploymentInitialized>{children}</DeploymentInitialized>
        </DeploymentProvider>
      </body>
    </html>
  );
}
