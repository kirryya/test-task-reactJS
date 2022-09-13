import React, { FC, useState } from 'react';

import { Field, Form, Formik } from 'formik';

import style from '../header/styles/Header.module.css';

import { FormBlockType, MyFormValues } from './types';

export const FormBlock: FC<FormBlockType> = ({ setIsActive }: FormBlockType) => {
  const initialValues: MyFormValues = { name: '', uid: '' };
  const [plaintiff, setPlaintiff] = useState<boolean>(false);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          /* console.log(values); */
          setIsActive(false);
        }}
      >
        <div
          style={{ display: 'flex', justifyContent: 'space-around', minWidth: '700px' }}
        >
          <Form className={style.form} style={{ marginBottom: '30px' }}>
            <label className={style.value} htmlFor="uid">
              УИД
              <Field type="text" id="uid" name="uid" />
            </label>
            <label className={style.value} htmlFor="number">
              Номер
              <Field type="text" id="number" name="number" />
            </label>

            <label className={style.value} htmlFor="plaintiff">
              <b>Истец:</b>
              <Field
                type="checkbox"
                id="plaintiff"
                name="plaintiff"
                checked={plaintiff}
                onChange={() => {
                  setPlaintiff(prevState => !prevState);
                }}
              />
              Юридическое лицо
            </label>
            {!plaintiff ? (
              <div>
                <label className={style.value} htmlFor="lastname">
                  Фамилия
                  <Field type="text" id="lastname" name="lastname" />
                </label>
                <label className={style.value} htmlFor="name">
                  Имя
                  <Field type="text" id="name" name="name" />
                </label>
                <label className={style.value} htmlFor="surname">
                  Отчество
                  <Field type="text" id="surname" name="surname" />
                </label>
                <label className={style.value} htmlFor="birthday">
                  Дата рождения
                  <Field type="data" id="birthday" name="birthday" />
                </label>
                <label className={style.value} htmlFor="reg_address">
                  Адрес регистрации
                  <Field
                    type="text"
                    id="reg_address"
                    name="reg_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="res_address">
                  Адрес проживания
                  <Field
                    type="text"
                    id="res_address"
                    name="res_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="phone">
                  Телефон
                  <Field type="text" id="phone" name="phone" />
                </label>{' '}
              </div>
            ) : (
              <div>
                <label className={style.value} htmlFor="inn">
                  ИНН
                  <Field type="text" id="inn" name="inn" />
                </label>
                <label className={style.value} htmlFor="ogrn">
                  ОГРН
                  <Field type="text" id="ogrn" name="ogrn" />
                </label>
                <label className={style.value} htmlFor="company">
                  Название компании
                  <Field type="text" id="company" name="company" />
                </label>
                <label className={style.value} htmlFor="legal_address">
                  Юридический адрес
                  <Field
                    type="data"
                    id="legal_address"
                    name="legal_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="legalIsMailing">
                  <Field type="checkbox" id="legalIsMailing" name="legalIsMailing" />
                  Почтовый адрес совпадает
                  <br />с юридическим
                </label>
                <label className={style.value} htmlFor="mailing_address">
                  Почтовый адрес
                  <Field
                    type="text"
                    id="mailing_address"
                    name="mailing_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="kpp">
                  КПП
                  <Field type="text" id="kpp" name="kpp" />
                </label>
                <label className={style.value} htmlFor="pc">
                  РС
                  <Field type="text" id="pc" name="pc" />
                </label>
                <label className={style.value} htmlFor="bank">
                  Банк
                  <Field type="text" id="bank" name="bank" />
                </label>
                <label className={style.value} htmlFor="bic">
                  БИК
                  <Field type="text" id="bic" name="bic" />
                </label>
                <label className={style.value} htmlFor="kc">
                  К/с
                  <Field type="text" id="kc" name="kc" />
                </label>
              </div>
            )}
          </Form>
          <Form className={style.form}>
            <label className={style.value} htmlFor="date">
              <b>Дата:</b>
              <Field type="date" id="date" name="date" size="200" />
            </label>
            <label
              className={style.value}
              htmlFor="defendant"
              style={{ marginTop: '40px' }}
            >
              <b>Ответчик:</b>
              <Field type="checkbox" id="defendant" name="defendant" />
              Юридическое лицо
            </label>

            <label className={style.value} htmlFor="inn">
              ИНН
              <Field type="text" id="inn" name="inn" />
            </label>
            <label className={style.value} htmlFor="ogrn">
              ОГРН
              <Field type="text" id="ogrn" name="ogrn" />
            </label>
            <label className={style.value} htmlFor="company">
              Название компании
              <Field type="text" id="company" name="company" />
            </label>
            <label className={style.value} htmlFor="legal_address">
              Юридический адрес
              <Field
                type="data"
                id="legal_address"
                name="legal_address"
                className={style.field}
              />
            </label>
            <label className={style.value} htmlFor="legalIsMailing">
              <Field type="checkbox" id="legalIsMailing" name="legalIsMailing" />
              Почтовый адрес совпадает
              <br />с юридическим
            </label>
            <label className={style.value} htmlFor="mailing_address">
              Почтовый адрес
              <Field
                type="text"
                id="mailing_address"
                name="mailing_address"
                className={style.field}
              />
            </label>
            <label className={style.value} htmlFor="kpp">
              КПП
              <Field type="text" id="kpp" name="kpp" />
            </label>
            <label className={style.value} htmlFor="pc">
              РС
              <Field type="text" id="pc" name="pc" />
            </label>
            <label className={style.value} htmlFor="bank">
              Банк
              <Field type="text" id="bank" name="bank" />
            </label>
            <label className={style.value} htmlFor="bic">
              БИК
              <Field type="text" id="bic" name="bic" />
            </label>
            <label className={style.value} htmlFor="kc">
              К/с
              <Field type="text" id="kc" name="kc" />
            </label>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setIsActive(false)}
                style={{ marginTop: '10px', marginRight: '10px' }}
              >
                Отмена
              </button>
              <button type="submit" style={{ marginTop: '10px' }}>
                Создать
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};
