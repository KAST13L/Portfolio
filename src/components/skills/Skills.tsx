import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from "../../common/title/Title";
import {SkillsComponentsType} from "../../app/state";

type SkillsPropsType = {
    skillsComponent: SkillsComponentsType
}

export function Skills(props: SkillsPropsType) {
    return (
        <div className={styles.skillsBlock}  id={'skills'}>
            <div className={styles.skillsContainer}>
                <Title
                    span={props.skillsComponent.span}
                    h2={props.skillsComponent.title}
                />
                <div className={styles.skills}>
                    {props.skillsComponent.skills.map((el, index) => {
                        return (
                            <Skill
                                key={index}
                                svgName={el.svgName}
                                description={el.description}
                            />
                        )
                    })}

                </div>
            </div>
        </div>
    );
}
