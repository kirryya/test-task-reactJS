import React, {FC, useState} from 'react';

import {Field, Form, Formik} from 'formik';

import style from '../header/styles/Header.module.css';

import {FormBlockType} from './types';
import {useDispatch} from "react-redux";
import {
  IJudicialCasesItemCompany,
  IJudicialCasesItemPeople,
  IJudicialCasesItemType
} from "store/judicialCases/types";
import {addJudicialCases} from "store/judicialCases/actions";

export type InitialValueType = {
  uid: string,
  case_id: string,
  plaintiff: IJudicialCasesItemType,
  defendant: IJudicialCasesItemType,
  start: string,
  end: string,
}

export const FormBlock: FC<FormBlockType> = ({ setIsActive }: FormBlockType) => {

  const [plaintiff, setPlaintiff] = useState<boolean>(false);
  const [defendant, setDefendant] = useState<boolean>(false);
  const dispatch = useDispatch()

  const people: IJudicialCasesItemPeople = {
    birthday: "",
    lastname: "",
    name: "",
    surname: "",
    phone: "",
    reg_address: "",
    res_address: "",
    type: 0
  }

  const company: IJudicialCasesItemCompany = {
    inn: "",
    ogrn: "",
    company: "",
    legal_address: "",
    mailing_address: "",
    kpp: "",
    pc: "",
    bank: "",
    bic: "",
    kc: "",
    type: 0
  }



    const initialValues: InitialValueType = {
      uid: "",
      case_id: "",
      plaintiff: {
        birthday: "",
        lastname: "",
        name: "",
        surname: "",
        phone: "",
        reg_address: "",
        res_address: "",
        type: 0
      },
      defendant: {
        inn: "",
        ogrn: "",
        company: "",
        legal_address: "",
        mailing_address: "",
        kpp: "",
        pc: "",
        bank: "",
        bic: "",
        kc: "",
        type: 0
      },
      start: "",
      end: "",
    };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
          dispatch(addJudicialCases(values))
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
                <label className={style.value} htmlFor="plaintiff.lastname">
                  Фамилия
                  <Field type="text" id="plaintiff.lastname" name="plaintiff.lastname" />
                </label>
                <label className={style.value} htmlFor="plaintiff.name">
                  Имя
                  <Field type="text" id="plaintiff.name" name="plaintiff.name" />
                </label>
                <label className={style.value} htmlFor="plaintiff.surname">
                  Отчество
                  <Field type="text" id="plaintiff.surname" name="plaintiff.surname" />
                </label>
                <label className={style.value} htmlFor="plaintiff.birthday">
                  Дата рождения
                  <Field type="date" id="plaintiff.birthday" name="plaintiff.birthday" />
                </label>
                <label className={style.value} htmlFor="plaintiff.reg_address">
                  Адрес регистрации
                  <Field
                    type="text"
                    id="plaintiff.reg_address"
                    name="plaintiff.reg_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="plaintiff.res_address">
                  Адрес проживания
                  <Field
                    type="text"
                    id="plaintiff.res_address"
                    name="plaintiff.res_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="phone">
                  Телефон
                  <Field type="text" id="plaintiff.phone" name="plaintiff.phone" />
                </label>
              </div>
            ) : (
              <div>
                <label className={style.value} htmlFor="plaintiff.inn">
                  ИНН
                  <Field type="text" id="plaintiff.inn" name="plaintiff.inn" />
                </label>
                <label className={style.value} htmlFor="plaintiff.ogrn">
                  ОГРН
                  <Field type="text" id="plaintiff.ogrn" name="plaintiff.ogrn" />
                </label>
                <label className={style.value} htmlFor="plaintiff.company">
                  Название компании
                  <Field type="text" id="plaintiff.company" name="plaintiff.company" />
                </label>
                <label className={style.value} htmlFor="plaintiff.legal_address">
                  Юридический адрес
                  <Field
                    type="data"
                    id="plaintiff.legal_address"
                    name="plaintiff.legal_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="plaintiff.legalIsMailing">
                  <Field type="checkbox" id="plaintiff.legalIsMailing" name="plaintiff.legalIsMailing" />
                  Почтовый адрес совпадает
                  <br />с юридическим
                </label>
                <label className={style.value} htmlFor="plaintiff.mailing_address">
                  Почтовый адрес
                  <Field
                    type="text"
                    id="plaintiff.mailing_address"
                    name="plaintiff.mailing_address"
                    className={style.field}
                  />
                </label>
                <label className={style.value} htmlFor="plaintiff.kpp">
                  КПП
                  <Field type="text" id="plaintiff.kpp" name="plaintiff.kpp" />
                </label>
                <label className={style.value} htmlFor="plaintiff.pc">
                  РС
                  <Field type="text" id="plaintiff.pc" name="plaintiff.pc" />
                </label>
                <label className={style.value} htmlFor="plaintiff.bank">
                  Банк
                  <Field type="text" id="plaintiff.bank" name="plaintiff.bank" />
                </label>
                <label className={style.value} htmlFor="plaintiff.bic">
                  БИК
                  <Field type="text" id="plaintiff.bic" name="plaintiff.bic" />
                </label>
                <label className={style.value} htmlFor="plaintiff.kc">
                  К/с
                  <Field type="text" id="plaintiff.kc" name="plaintiff.kc" />
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
              <Field type="checkbox"
                     id="defendant"
                     name="defendant"
                     checked={defendant}
                     onChange={() => {
                       setDefendant(prevState => !prevState);
                     }}/>
              Юридическое лицо
            </label>
            {!defendant ? (
                    <div>
                      <label className={style.value} htmlFor="defendant.lastname">
                        Фамилия
                        <Field type="text" id="defendant.lastname" name="defendant.lastname" />
                      </label>
                      <label className={style.value} htmlFor="defendant.name">
                        Имя
                        <Field type="text" id="defendant.name" name="defendant.name" />
                      </label>
                      <label className={style.value} htmlFor="defendant.surname">
                        Отчество
                        <Field type="text" id="defendant.surname" name="defendant.surname" />
                      </label>
                      <label className={style.value} htmlFor="defendant.birthday">
                        Дата рождения
                        <Field type="date" id="defendant.birthday" name="defendant.birthday" />
                      </label>
                      <label className={style.value} htmlFor="defendant.reg_address">
                        Адрес регистрации
                        <Field
                            type="text"
                            id="defendant.reg_address"
                            name="defendant.reg_address"
                            className={style.field}
                        />
                      </label>
                      <label className={style.value} htmlFor="defendant.res_address">
                        Адрес проживания
                        <Field
                            type="text"
                            id="defendant.res_address"
                            name="defendant.res_address"
                            className={style.field}
                        />
                      </label>
                      <label className={style.value} htmlFor="defendant.phone">
                        Телефон
                        <Field type="text" id="defendant.phone" name="defendant.phone" />
                      </label>
                    </div>
                ) : ( <div>
            <label className={style.value} htmlFor="defendant.inn">
              ИНН
              <Field type="text" id="defendant.inn" name="defendant.inn" />
            </label>
            <label className={style.value} htmlFor="defendant.ogrn">
              ОГРН
              <Field type="text" id="defendant.ogrn" name="defendant.ogrn" />
            </label>
            <label className={style.value} htmlFor="company">
              Название компании
              <Field type="text" id="defendant.company" name="defendant.company" />
            </label>
            <label className={style.value} htmlFor="legal_address">
              Юридический адрес
              <Field
                type="data"
                id="defendant.legal_address"
                name="defendant.legal_address"
                className={style.field}
              />
            </label>
            <label className={style.value} htmlFor="defendant.legalIsMailing">
              <Field type="checkbox" id="defendant.legalIsMailing" name="defendant.legalIsMailing" />
              Почтовый адрес совпадает
              <br />с юридическим
            </label>
            <label className={style.value} htmlFor="defendant.mailing_address">
              Почтовый адрес
              <Field
                type="text"
                id="defendant.mailing_address"
                name="defendant.mailing_address"
                className={style.field}
              />
            </label>
            <label className={style.value} htmlFor="defendant.kpp">
              КПП
              <Field type="text" id="defendant.kpp" name="defendant.kpp" />
            </label>
            <label className={style.value} htmlFor="defendant.pc">
              РС
              <Field type="text" id="defendant.pc" name="defendant.pc" />
            </label>
            <label className={style.value} htmlFor="defendant.bank">
              Банк
              <Field type="text" id="defendant.bank" name="defendant.bank" />
            </label>
            <label className={style.value} htmlFor="defendant.bic">
              БИК
              <Field type="text" id="defendant.bic" name="defendant.bic" />
            </label>
            <label className={style.value} htmlFor="defendant.kc">
              К/с
              <Field type="text" id="defendant.kc" name="defendant.kc" />
            </label>
            </div>)}
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
