import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = ({ children, className }) => {
  return (
    <div
      className={twMerge(className, 'p-4 rounded-xl')}
      style={{ backgroundColor: '#0E0E11' }}
    >
      {children}
    </div>
  );
};
