import React, {FC} from 'react';
import style from '../header/styles/Header.module.css';
import {Field} from "formik";
import { PurposeType } from './types';

export const Company: FC<PurposeType> = ({ title }: PurposeType) => {
    return (
        <div>
            <label className={style.value} htmlFor={`${title}.inn`}>
                ИНН
                <Field type='text' name={`${title}.inn`} />
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
    );
};