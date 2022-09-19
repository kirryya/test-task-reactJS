import React, { FC } from 'react';
import { ReturnComponentType } from '../../types';
import { AddDataType } from '../addData/types';
import logoLightSvg from '../../../../../../assets/images/logo-light.svg';

export const HeaderModal: FC<AddDataType> = ({
  setIsActive,
}: AddDataType): ReturnComponentType => {
  const onCloseModalWindowClick = (): void => {
    setIsActive(false);
  };

  return (
    <div className='bg-primary bg-soft modal-header__narrow'>
      <div className='text-primary'>
        <h5 className='text-primary h3'>Создать дело</h5>
      </div>
      <div className='modal-logo-header'>
        <span className='logo-lg'>
          <img src={logoLightSvg} alt='' height='50' />
        </span>
      </div>
      <div onClick={onCloseModalWindowClick} className='modal-closebtn'>
        <i className='fas fa-times' />
      </div>
    </div>
  );
};
