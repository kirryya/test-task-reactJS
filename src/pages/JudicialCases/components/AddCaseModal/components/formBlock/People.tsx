import React, {FC} from 'react';
import style from '../header/styles/Header.module.css';
import {Field} from "formik";
import { PurposeType } from './types';
import { ReturnComponentType } from "../../types";

export const People: FC<PurposeType> = ( { title }: PurposeType ): ReturnComponentType => {
    return (
        <div>
            <label className={style.value}>
                Фамилия
                <Field type='text' name={`${title}.lastname`} />
            </label>
            <label className={style.value}>
                Имя
                <Field type='text' name={`${title}.name`} />
            </label>
            <label className={style.value}>
                Отчество
                <Field type='text' name={`${title}.surname`}/>
            </label>
            <label className={style.value}>
                Дата рождения
                <Field type='date' name={`${title}.birthday`} />
            </label>
            <label className={style.value} >
                Адрес регистрации
                <Field
                    type='text'
                    name={`${title}.reg_address`}
                    className={style.field}
                />
            </label>
            <label className={style.value}>
                Адрес проживания
                <Field
                    type='text'
                    name={`${title}.res_address`}
                    className={style.field}
                />
            </label>
            <label className={style.value}>
                Телефон
                <Field type='text' name={`${title}.phone`} />
            </label>
            </div>
    );
};