import React, { FC } from 'react';
import { ReturnComponentType } from '../../types';
import { AddDataType } from '../addData/types';


export const HeaderModal: FC<AddDataType> = ({
  setIsActive,
}: AddDataType): ReturnComponentType => {
  const onCloseModalWindowClick = (): void => {
    setIsActive(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        color: '#7589eb',
        backgroundColor: '#d4daf8',
        borderRadius: '8px 8px 0 0',
        minHeight: '100px',
      }}
    >
      <h3 style={{ marginLeft: '20px' }}>Создать дело</h3>
      <div style={{ marginBottom: '81px' }}>
        <button
          type="submit"
          onClick={onCloseModalWindowClick}
          style={{
            maxWidth: '17px',
            maxHeight: '17px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid',
            borderRadius: '8px',
            color: '#7589eb',
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};
