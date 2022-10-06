import React from 'react';
import styles from './Links.module.scss'
import {SvgSelector} from "../../../common/svgSelector/SvgSelector";
import {LinksType} from "../../../app/state";
import {LanguageType} from "../../../app/App";

type LinksPropsType = {
    links: LinksType[]
    callback?: (language: LanguageType) => void
    language?: LanguageType
}

export function Links(props: LinksPropsType) {

    const onClickHandler = (language: LanguageType) => {
        props.callback && props.callback(language)
    }

    return (
        <div className={styles.links}>
            {props.links.map((el, index) => {
                return (
                    <a key={index} href={el.href} target="_blank">
                        <SvgSelector svgName={el.svgName}/>
                    </a>
                )
            })}
            {props.callback &&
                <div className={styles.language}>
                <span
                    onClick={() => onClickHandler("en")}
                    className={props.language === "en" ? styles.active : ''}
                >en </span>
                    |
                    <span onClick={() => onClickHandler("ua")}
                          className={props.language === "ua" ? styles.active : ''}
                    > ua</span>
                </div>
            }

        </div>
    );
}
