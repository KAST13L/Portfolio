import React, {useState} from 'react';
import styles from './Contacts.module.scss'
import {Title} from "../../common/title/Title";
import {Links} from "../header/links/Links";
import {ContactsComponentType} from "../../app/state";
import {useForm} from "react-hook-form";
import axios from "axios";

type ContactsPropsType = {
    contactsComponent: ContactsComponentType
}

export function Contacts(props: ContactsPropsType) {

    const { register, handleSubmit, ...form } = useForm();
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const onSubmit = async (data: any) => {
        setIsDisabled(true)
        // http://localhost:3001/sendMessage
        try {
            const res = await axios.post('https://gmail-nodej.herokuapp.com/sendMessage', data)
            alert('Message is sending!')
            form.reset();
        } catch (e) {
            alert(e)
        } finally {
            setIsDisabled(false)
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
                        <p className={styles.tel}>{props.contactsComponent.call}</p>
                        <div>
                            <Links links={props.contactsComponent.contactsLinks}/>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>{props.contactsComponent.name}</label>
                                <input {...register("name")} />
                            </div>
                            <div>
                                <label>{props.contactsComponent.email}</label>
                                <input {...register("email")}/>
                            </div>
                            <div>
                                <label>{props.contactsComponent.formMessage}</label>
                                <textarea {...register("message")} ></textarea>
                            </div>
                            <div>
                                <button disabled={isDisabled} style={{width:'170px'}}  type={'submit'}>{ isDisabled ? 'loading...' : props.contactsComponent.button} &#9658;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
