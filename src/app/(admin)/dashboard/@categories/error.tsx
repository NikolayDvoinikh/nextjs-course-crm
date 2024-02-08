'use client';

import React from 'react';
import Button from '@/app/components/button';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ reset }: ErrorComponentProps) => {
  return (
    <div className="font-semibold flex items-center justify-center h-full">
      Unexpected error inside slot CATEGORIES
      <Button onClick={() => reset()}>Refresh</Button>
    </div>
  );
};

export default ErrorComponent;
