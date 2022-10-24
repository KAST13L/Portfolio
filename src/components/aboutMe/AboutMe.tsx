import React from 'react';
import styles from './AboutMe.module.scss'
import {Title} from "../../common/title/Title";
import {AboutMeComponent} from "../../app/state";
import Fade, {Flip, Hinge, Roll, Zoom} from "react-awesome-reveal";


type AboutMePropsType = {
    aboutMeComponent: AboutMeComponent
}

export function AboutMe(props: AboutMePropsType) {
    return (
        <div className={styles.aboutBlock} id={'about'}>
            <div className={styles.aboutContainer}>
                <Roll>
                <Title
                    span={props.aboutMeComponent.span}
                    h2={props.aboutMeComponent.title}
                />
                </Roll>
                <div className={styles.aboutMeInfo}>
                    <div className={styles.textInfo}>
                        <Fade><h2>{props.aboutMeComponent.h2}<span>{props.aboutMeComponent.name}</span></h2></Fade>
                        <p>{props.aboutMeComponent.aboutMe}</p>
                    </div>
                    <div className={styles.infoBlock}>
                        {props.aboutMeComponent.contacts.map((el, index) => {
                            return (
                                <div key={index} className={styles.block}>
                                    <p className={styles.title}>{el.title}</p>
                                    <p className={styles.info}>{el.info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
