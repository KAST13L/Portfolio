import React, {useState} from 'react';
import styles from './Contacts.module.scss'
import {Title} from "../../common/title/Title";
import {Links} from "../header/links/Links";
import {ContactsComponentType} from "../../app/state";
import {useForm} from "react-hook-form";
import axios from "axios";
import {SnackBar} from "../SnackBar/SnackBar";

type ContactsPropsType = {
    contactsComponent: ContactsComponentType
}

export function Contacts(props: ContactsPropsType) {

    const {register, handleSubmit, formState: {errors}, ...form} = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
        mode: 'onTouched'
    });

    const [status, setStatus] = useState<'loading' | 'error' | 'success' | 'idle'>('idle')

    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const onSubmit = async (data: any) => {
        setStatus('loading')
        try {
            const res = await axios.post('https://gmail-nodej.herokuapp.com/sendMessage', data)
            setSuccess('Message is sending!')
            form.reset();
        } catch (e) {
            setError(String(e))
        } finally {
            setStatus("success")
        }
    }

    return (
        <div className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title h2={props.contactsComponent.title}/>
                <div className={styles.formInfo}>
                    <div className={styles.info}>
                        <p className={styles.text}>{props.contactsComponent.p}</p>
                        <h3>{props.contactsComponent.h3}</h3>
                        <p className={styles.tel}>{props.contactsComponent.callLife}</p>
                        <p className={styles.tel}>{props.contactsComponent.callVodafone}</p>
                        <div>
                            <Links links={props.contactsComponent.contactsLinks}/>
                        </div>
                    </div>
                    <SnackBar error={error} success={success} setError={setError} setSuccess={setSuccess}/>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>{props.contactsComponent.name} {errors.name &&
                                    <span style={{height: '1px', color: 'red'}}>{errors.name.message}</span>}</label>
                                <input {...register("name", {
                                    required: props.contactsComponent.formError.nameError
                                })} />
                            </div>
                            <div>
                                <label>{props.contactsComponent.email} {errors.email &&
                                    <span style={{height: '1px', color: 'red'}}>{errors.email.message}</span>}</label>
                                <input {...register('email', {
                                    required: props.contactsComponent.formError.emailError,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: props.contactsComponent.formError.emailIncorrect
                                    }
                                })}/>
                            </div>
                            <div>
                                <label>{props.contactsComponent.formMessage} {errors.message &&
                                    <span style={{height: '1px', color: 'red'}}>{errors.message.message}</span>}</label>
                                <textarea {...register("message", {
                                    required: props.contactsComponent.formError.messageError
                                })} ></textarea>
                            </div>

                            <div>
                                <button disabled={status === 'loading'} type={'submit'}>
                                    {
                                        errors.email || errors.name || errors.message
                                            ? <span
                                                style={{color: 'red'}}>{props.contactsComponent.formError.buttonError}</span>
                                            : status === 'loading'
                                                ? <span
                                                    style={{color: 'green'}}>{props.contactsComponent.formError.loading}</span>
                                                : props.contactsComponent.button + ' ▶'
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}





