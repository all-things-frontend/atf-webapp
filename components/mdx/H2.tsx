import React from 'react';

export default function H2({ children }: { children?: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-yellow-600">{children}</h2>;
}
