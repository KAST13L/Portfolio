import React from 'react';
import styles from './DistantWork.module.scss'
import {Title} from "../../common/title/Title";
import {DistantWorkComponentType} from "../../app/state";

type DistantWorkPropsType = {
    distantWorkComponent: DistantWorkComponentType
}

export function DistantWork(props: DistantWorkPropsType) {
    return (
        <div className={styles.mainDistantWork}>
            <div className={styles.div1}></div>
            <div className={styles.div2} style={{backgroundImage: `url(${props.distantWorkComponent.bgImg})`}}></div>
            <div className={styles.distantWorkContainer}>
                <Title h2={props.distantWorkComponent.title}/>
                <a href={'#contacts'}>{props.distantWorkComponent.a}</a>
            </div>
        </div>
    );
}