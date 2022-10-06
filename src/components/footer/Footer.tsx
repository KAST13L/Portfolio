import React from 'react';
import styles from './Footer.module.scss'
import {FooterComponentType} from "../../app/state";

type FooterPropsType = {
    footerComponent: FooterComponentType
}

export function Footer(props: FooterPropsType) {
    return (
        <footer className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <p>{props.footerComponent.copyright}</p>
                <p>{props.footerComponent.designed}</p>
            </div>
        </footer>
    );
}
