'use client';

import Link from 'next/link';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
          <Link href="/">Go to Homepage</Link>
        </div>
      </body>
    </html>
  );
}
