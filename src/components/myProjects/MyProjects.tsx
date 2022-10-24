import React from 'react';
import styles from './MyProjects.module.scss'
import {Project} from './project/Project';
import {Title} from '../../common/title/Title';
import {ProjectsComponentsType} from "../../app/state";
import Bounce, {Zoom} from "react-awesome-reveal";

type ProjectsPropsType = {
    projectsComponent: ProjectsComponentsType
}

export function MyProjects(props: ProjectsPropsType) {

    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <Zoom>
                    <Title
                        span={props.projectsComponent.span}
                        h2={props.projectsComponent.title}
                    />
                </Zoom>
                <div className={styles.projects}>
                    {props.projectsComponent.projects.map((el, index) => {
                        return (
                            <Project
                                key={index}
                                title={el.title}
                                img={el.img}
                                description={el.description}
                                href={el.href}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
