import React from 'react';
import styles from './Contacts.module.scss'
import {Title} from "../../common/title/Title";
import {Links} from "../header/links/Links";
import {ContactsComponentType} from "../../app/state";

type ContactsPropsType = {
    contactsComponent: ContactsComponentType
}

export function Contacts(props: ContactsPropsType) {
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
                        <form>
                            <div>
                                <label>{props.contactsComponent.name}</label>
                                <input id={'name'} name={'name'} type={'text'}/>
                            </div>
                            <div>
                                <label>{props.contactsComponent.email}</label>
                                <input id={'email'} name={'email'} type={'email'}/>
                            </div>
                            <div>
                                <label>{props.contactsComponent.formMessage}</label>
                                <textarea id={'formMessage'} name={'formMessage'}></textarea>
                            </div>
                            <div>
                                <button>{props.contactsComponent.button} &#9658;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
