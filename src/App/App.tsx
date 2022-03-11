import React from 'react';
import { TEMPORARY_ANY } from '@models';

export const App: React.FC<TEMPORARY_ANY> = () => {
  const Anything = '1234';
  const Nuuke = (name: string) => <strong>{name}</strong>;

  return (
    <div>
      {Nuuke('Bo1221ooo')}
      {Anything}
    </div>
  );
};
