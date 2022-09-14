import React, { FC } from 'react';


import { FormBlock } from '..';
import { ReturnComponentType } from '../../types';
import { AddDataType } from './types';
import {
    HeaderModal
} from "pages/JudicialCases/components/AddCaseModal/components/header/HeaderModal";



export const AddData: FC<AddDataType> = ({
  setIsActive
}: AddDataType): ReturnComponentType => {
  return (
    <div>
      <HeaderModal setIsActive={setIsActive} />
      <FormBlock setIsActive={setIsActive} />
    </div>
  );
};
