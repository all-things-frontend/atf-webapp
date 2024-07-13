import React from 'react';

export default function P({ children }: { children?: React.ReactNode }) {
  return <p className="text-sm text-gray-300">{children}</p>;
}
