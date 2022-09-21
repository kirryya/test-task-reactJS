import React, {FC} from 'react';
import style from '../header/styles/Header.module.css';
import {Field} from "formik";
import { PurposeType } from './types';

export const People: FC<PurposeType> = ( { title }: PurposeType ) => {
    return (
        <div>
            <label className={style.value} htmlFor={`${title}.lastname`}>
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
            <label className={style.value} htmlFor='plaintiff.phone'>
                Телефон
                <Field type='text' name='plaintiff.phone' />
            </label>
            </div>
    );
};