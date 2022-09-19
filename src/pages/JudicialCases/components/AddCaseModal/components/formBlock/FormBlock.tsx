import React, { FC, useState } from 'react';

import { Field, Form, Formik } from 'formik';

import style from '../header/styles/Header.module.css';

import { FormBlockType } from './types';
import { useDispatch } from 'react-redux';
import { IJudicialCasesItemType } from 'store/judicialCases/types';
import { addJudicialCases } from 'store/judicialCases/actions';
import { Button } from 'reactstrap';

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

              {plaintiffCompany ? (
                <div>
                  <label className={style.value} htmlFor='plaintiff.inn'>
                    ИНН
                    <Field type='text' name='plaintiff.inn' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.ogrn'>
                    ОГРН
                    <Field type='text' name='plaintiff.ogrn' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.company'>
                    Название компании
                    <Field type='text' name='plaintiff.company' />
                  </label>
                  <label
                    className={style.value}
                    htmlFor='plaintiff.legal_address'
                  >
                    Юридический адрес
                    <Field
                      type='text'
                      name='plaintiff.legal_address'
                      className={style.field}
                    />
                  </label>
                  <label
                    className={style.value}
                    htmlFor='plaintiff.legalIsMailing'
                  >
                    <Field type='checkbox' name='plaintiff.legalIsMailing' />
                    Почтовый адрес совпадает
                    <br />с юридическим
                  </label>
                  <label
                    className={style.value}
                    htmlFor='plaintiff.mailing_address'
                  >
                    Почтовый адрес
                    <Field
                      type='text'
                      name='plaintiff.mailing_address'
                      className={style.field}
                    />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.kpp'>
                    КПП
                    <Field type='text' name='plaintiff.kpp' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.pc'>
                    РС
                    <Field type='text' id='plaintiff.pc' name='plaintiff.pc' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.bank'>
                    Банк
                    <Field type='text' name='plaintiff.bank' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.bic'>
                    БИК
                    <Field type='text' name='plaintiff.bic' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.kc'>
                    К/с
                    <Field type='text' name='plaintiff.kc' />
                  </label>
                </div>
              ) : (
                <div>
                  <label className={style.value} htmlFor='plaintiff.lastname'>
                    Фамилия
                    <Field type='text' name='plaintiff.lastname' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.name'>
                    Имя
                    <Field type='text' name='plaintiff.name' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.surname'>
                    Отчество
                    <Field type='text' name='plaintiff.surname' />
                  </label>
                  <label className={style.value} htmlFor='plaintiff.birthday'>
                    Дата рождения
                    <Field type='date' name='plaintiff.birthday' />
                  </label>
                  <label
                    className={style.value}
                    htmlFor='plaintiff.reg_address'
                  >
                    Адрес регистрации
                    <Field
                      type='text'
                      name='plaintiff.reg_address'
                      className={style.field}
                    />
                  </label>
                  <label
                    className={style.value}
                    htmlFor='plaintiff.res_address'
                  >
                    Адрес проживания
                    <Field
                      type='text'
                      name='plaintiff.res_address'
                      className={style.field}
                    />
                  </label>
                  <label className={style.value} htmlFor='phone'>
                    Телефон
                    <Field type='text' name='plaintiff.phone' />
                  </label>
                </div>
              )}
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

              {defendantCompany ? (
                <div>
                  <label className={style.value} htmlFor='defendant.inn'>
                    ИНН
                    <Field type='text' name='defendant.inn' />
                  </label>
                  <label className={style.value} htmlFor='defendant.ogrn'>
                    ОГРН
                    <Field
                      type='text'
                      id='defendant.ogrn'
                      name='defendant.ogrn'
                    />
                  </label>
                  <label className={style.value} htmlFor='company'>
                    Название компании
                    <Field type='text' name='defendant.company' />
                  </label>
                  <label className={style.value} htmlFor='legal_address'>
                    Юридический адрес
                    <Field
                      type='data'
                      name='defendant.legal_address'
                      className={style.field}
                    />
                  </label>
                  <label
                    className={style.value}
                    htmlFor='defendant.legalIsMailing'
                  >
                    <Field type='checkbox' name='defendant.legalIsMailing' />
                    Почтовый адрес совпадает
                    <br />с юридическим
                  </label>
                  <label
                    className={style.value}
                    htmlFor='defendant.mailing_address'
                  >
                    Почтовый адрес
                    <Field
                      type='text'
                      name='defendant.mailing_address'
                      className={style.field}
                    />
                  </label>
                  <label className={style.value} htmlFor='defendant.kpp'>
                    КПП
                    <Field type='text' name='defendant.kpp' />
                  </label>
                  <label className={style.value} htmlFor='defendant.pc'>
                    РС
                    <Field type='text' name='defendant.pc' />
                  </label>
                  <label className={style.value} htmlFor='defendant.bank'>
                    Банк
                    <Field type='text' name='defendant.bank' />
                  </label>
                  <label className={style.value} htmlFor='defendant.bic'>
                    БИК
                    <Field type='text' name='defendant.bic' />
                  </label>
                  <label className={style.value} htmlFor='defendant.kc'>
                    К/с
                    <Field type='text' name='defendant.kc' />
                  </label>
                </div>
              ) : (
                <div>
                  <label className={style.value} htmlFor='defendant.lastname'>
                    Фамилия
                    <Field type='text' name='defendant.lastname' />
                  </label>
                  <label className={style.value} htmlFor='defendant.name'>
                    Имя
                    <Field type='text' name='defendant.name' />
                  </label>
                  <label className={style.value} htmlFor='defendant.surname'>
                    Отчество
                    <Field type='text' name='defendant.surname' />
                  </label>
                  <label className={style.value} htmlFor='defendant.birthday'>
                    Дата рождения
                    <Field type='date' name='defendant.birthday' />
                  </label>
                  <label
                    className={style.value}
                    htmlFor='defendant.reg_address'
                  >
                    Адрес регистрации
                    <Field
                      type='text'
                      name='defendant.reg_address'
                      className={style.field}
                    />
                  </label>
                  <label
                    className={style.value}
                    htmlFor='defendant.res_address'
                  >
                    Адрес проживания
                    <Field
                      type='text'
                      name='defendant.res_address'
                      className={style.field}
                    />
                  </label>
                  <label className={style.value} htmlFor='defendant.phone'>
                    Телефон
                    <Field type='text' name='defendant.phone' />
                  </label>
                </div>
              )}
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
