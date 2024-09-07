// app/error.tsx
"use client"; // Add this directive to specify a client component

import { FC } from 'react';

const ErrorPage: FC = () => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>We are sorry, but something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
