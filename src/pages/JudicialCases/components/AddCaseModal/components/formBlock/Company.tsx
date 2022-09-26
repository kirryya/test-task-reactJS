import React, {FC, useState} from 'react';
import style from '../header/styles/Header.module.css';
import { Field } from "formik";
import { PurposeType } from './types';
import { ReturnComponentType } from "../../types";

export const Company: FC<PurposeType> = ({ title }: PurposeType): ReturnComponentType => {
    const [legalAddress, setLegalAddress] = useState<boolean>(false)
    const [mailing, setMailing] = useState<string>("")
    const [legal, setLegal] = useState<string>("")

    const onMailingClick = () => {
      setLegalAddress(!legalAddress)
        if (legalAddress) {
            setMailing(legal)
        } else {
            setMailing(mailing)
        }
    }

    return (
        <div>
            <label className={style.value} >
                ИНН
                <Field type='text' name={`${title}.inn`} />
            </label>
            <label className={style.value} >
                ОГРН
                <Field type='text' name={`${title}.ogrn`} />
            </label>
            <label className={style.value} >
                Название компании
                <Field type='text' name={`${title}.company`} />
            </label>
            <label className={style.value}  >
                Юридический адрес
                <Field
                    type='text'
                    name={`${title}.legal_address`}
                    className={style.field}
                    value={legal}
                    onChange={(e) => {setLegal(e.currentTarget.value)}}
                />
            </label>
            <label className={style.value} onClick={onMailingClick} >
                <Field type='checkbox' checked={legal === mailing} />
                Почтовый адрес совпадает
                <br />с юридическим
            </label>
            <label className={style.value} >
                Почтовый адрес
                <Field
                    type='text'
                    name={`${title}.mailing_address`}
                    className={style.field}
                    value={mailing}
                    onChange={(e) => {setMailing(e.currentTarget.value)}}
                />
            </label>
            <label className={style.value}>
                КПП
                <Field type='text' name={`${title}.kpp`} />
            </label>
            <label className={style.value}>
                РС
                <Field type='text' name={`${title}.pc`} />
            </label>
            <label className={style.value}>
                Банк
                <Field type='text' name={`${title}.bank`} />
            </label>
            <label className={style.value}>
                БИК
                <Field type='text' name={`${title}.bic`} />
            </label>
            <label className={style.value}>
                К/с
                <Field type='text' name={`${title}.kc`} />
            </label>
            </div>
    );
};