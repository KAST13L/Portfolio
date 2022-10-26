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

    const { register, handleSubmit, formState:{errors},...form } = useForm({
        defaultValues:{
            name:'',
            email:'',
            message:''
        },
        mode: 'onTouched'
    });

    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const onSubmit = async (data: any) => {
        setIsDisabled(true)
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
                                <label>{props.contactsComponent.name}  {errors.name && <span style={{height:'1px',color:'red'}}>{errors.name.message}</span>}</label>
                                <input {...register("name", {
                                    required: "Name is required"
                                })} />
                            </div>
                            <div>
                                <label>{props.contactsComponent.email}  {errors.email && <span style={{height:'1px',color:'red'}}>{errors.email.message}</span>}</label>
                                <input {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Write correct email'
                                    }
                                })}/>
                            </div>
                            <div>
                                <label>{props.contactsComponent.formMessage}  {errors.message && <span style={{height:'1px',color:'red'}}>{errors.message.message}</span>}</label>
                                <textarea {...register("message", {
                                    required: 'Message is required'
                                })} ></textarea>
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
