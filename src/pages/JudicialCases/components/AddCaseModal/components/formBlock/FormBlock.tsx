import React, { FC, useState } from 'react';

import { Field, Form, Formik } from 'formik';

import style from '../header/styles/Header.module.css';

import { FormBlockType } from './types';
import {useDispatch, useSelector} from 'react-redux';
import { IJudicialCasesItemType } from 'store/judicialCases/types';
import { addJudicialCases } from 'store/judicialCases/actions';
import { Button } from 'reactstrap';
import { Company }  from '..';
import { People } from '..';
import {RootState} from "store/reducers";

export type InitialValueType = {
  uid: string;
  case_id: string;
  plaintiff: IJudicialCasesItemType;
  defendant: IJudicialCasesItemType;
  start: string;
  end: string;
  plaintiff_type: 0 | 1;
  defendant_type: 0 | 1;
  area_id: number | undefined
};

export const FormBlock: FC<FormBlockType> = ({
  setIsActive,
}: FormBlockType) => {
  const [plaintiffCompany, setPlaintiffCompany] = useState<boolean>(false);
  const [defendantCompany, setDefendantCompany] = useState<boolean>(true);

  const dispatch = useDispatch();

  const area_id = useSelector<RootState, number | undefined>( state => state.Profile?.areaId)

  const company = {
    inn: '',
    ogrn: '',
    company: '',
    legal_address: '',
    mailing_address: '',
    kpp: '',
    pc: '',
    bank: '',
    bic: '',
    kc: '',
    type: 1,
  };

  const people = {
    birthday: '',
    lastname: '',
    name: '',
    surname: '',
    phone: '',
    reg_address: '',
    res_address: '',
    type: 0,
  };

  const initialValues: InitialValueType = {
    uid: '',
    case_id: '',
    plaintiff: plaintiffCompany ? company : people,
    defendant: defendantCompany ? company : people,
    start: '',
    end: '',
    plaintiff_type: 0,
    defendant_type: 1,
    area_id: area_id,
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          dispatch(addJudicialCases(values));
          setIsActive(false);
          resetForm();
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            minWidth: '800px',
          }}
        >
          <Form className={style.form}>
            <div className='modal-body '>
              <label htmlFor='uid' className={style.value}>
                УИД
                <Field type='text' name='uid' />
              </label>
              <label className={style.value} >
                Номер
                <Field type='text' name='case_id' />
              </label>

              <label className={style.value} >
                <b>Истец:</b>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    minWidth: '167px',
                  }}
                >
                  <Field
                    type='checkbox'
                    name='plaintiff'
                    checked={plaintiffCompany}
                    onChange={() => {
                      setPlaintiffCompany(prevState => !prevState);
                    }}
                  />
                  Юридическое лицо
                </div>
              </label>

              {plaintiffCompany ?  <Company title="plaintiff" />  : <People title= "plaintiff" />}
            </div>
          </Form>
          <Form>
            <div className='modal-body '>
              <label className={style.value}>
                <b>Дата:</b>
                <Field type='date' name='start' size='200' />
              </label>
              <label
                className={style.value}
                style={{ marginTop: '40px' }}
              >
                <b>Ответчик:</b>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    minWidth: '167px',
                  }}
                >
                  <Field
                    type='checkbox'
                    name='defendant'
                    checked={defendantCompany}
                    onChange={() => {
                      setDefendantCompany(prevState => !prevState);
                    }}
                  />
                  Юридическое лицо
                </div>
              </label>

              {defendantCompany ? <Company title="defendant" />  : <People title= "defendant" /> }
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                <Button
                  type='button'
                  onClick={() => setIsActive(false)}
                  style={{ marginTop: '10px', marginRight: '10px' }}
                >
                  Отмена
                </Button>
                <Button
                  type='submit'
                  style={{ marginTop: '10px' }}
                  color='primary'
                >
                  Создать
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};
