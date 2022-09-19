import React from 'react';

export type UniverseModalWindowType = {
  isActive: boolean;
  setActive: (active: boolean) => void;
  children?: React.ReactNode;
  areaId: number;
};
