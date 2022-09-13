import React, { FC } from 'react';

import style from './styles/UniverseModal.module.css';
import { UniverseModalWindowType } from './types';

import { ReturnComponentType } from 'types';

export const UniverseModalWindow: FC<UniverseModalWindowType> = ({
  isActive,
  setActive,
  children,
}: UniverseModalWindowType): ReturnComponentType => {
  const onCloseModalWindowClick = (): void => {
    setActive(false);
  };

  return (
    <div
      className={isActive ? `${style.modal} ${style.active}` : style.modal}
      role="button"
      tabIndex={0}
      onClick={onCloseModalWindowClick}
      aria-hidden="true"
    >
      <div
        className={
          isActive ? `${style.modal__content} ${style.active}` : style.modal__content
        }
        role="button"
        tabIndex={0}
        onClick={e => e.stopPropagation()}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};
