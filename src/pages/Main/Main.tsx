import React from 'react';

export const Main: React.FC = () => {
  const Anything = '1234';
  const Nuuke = (name: string) => <strong>{name}</strong>;
  return (
    <div>
      {Nuuke('Bo1221ooo')}
      {Anything}
    </div>
  );
};
