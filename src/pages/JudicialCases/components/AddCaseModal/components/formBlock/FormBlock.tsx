import React, { FC, useState } from 'react';

import { Field, Form, Formik } from 'formik';

import style from '../header/styles/Header.module.css';

import { FormBlockType } from './types';
import { useDispatch } from 'react-redux';
import { IJudicialCasesItemType } from 'store/judicialCases/types';
import { addJudicialCases } from 'store/judicialCases/actions';
import { Button } from 'reactstrap';
import { Company }  from '..';
import { People } from '..';

export type InitialValueType = {
  uid: string;
  case_id: string;
  plaintiff: IJudicialCasesItemType;
  defendant: IJudicialCasesItemType;
  start: string;
  end: string;
};

export const FormBlock: FC<FormBlockType> = ({
  setIsActive,
}: FormBlockType) => {
  const [plaintiffCompany, setPlaintiffCompany] = useState<boolean>(false);
  const [defendantCompany, setDefendantCompany] = useState<boolean>(true);

  const dispatch = useDispatch();

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
              <label className={style.value} htmlFor='number'>
                Номер
                <Field type='text' name='number' />
              </label>

              <label className={style.value} htmlFor='plaintiff'>
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
              <label className={style.value} htmlFor='date'>
                <b>Дата:</b>
                <Field type='date' name='date' size='200' />
              </label>
              <label
                className={style.value}
                htmlFor='defendant'
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
