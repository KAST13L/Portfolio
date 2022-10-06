import React, {useState} from 'react';
import './App.scss';
import {Header} from "../components/header/Header";
import {Main} from "../components/main/Main";
import {Skills} from "../components/skills/Skills";
import {MyProjects} from "../components/myProjects/MyProjects";
import {DistantWork} from "../components/distantWork/DistantWork";
import {Contacts} from "../components/contacts/Contacts";
import {Footer} from "../components/footer/Footer";
import {state} from "./state"
import {AboutMe} from "../components/aboutMe/AboutMe";

function App() {

    const [language, setLanguage] = useState<LanguageType>('en')

    return (
        <div className="App">
            <Header
                headerComponent={state[language].headerComponent}
                callback={setLanguage}
                language={language}
            />
            <Main mainComponent={state[language].mainComponent}/>
            <AboutMe aboutMeComponent={state[language].aboutMeComponent}/>
            <Skills skillsComponent={state[language].skillsComponent}/>
            <div id={'projects'}>
                <MyProjects projectsComponent={state[language].projectsComponent}/>
                <DistantWork distantWorkComponent={state[language].distantWorkComponent}/>
            </div>
            <Contacts contactsComponent={state[language].contactsComponent}/>
            <Footer footerComponent={state[language].footerComponent}/>
        </div>
    );
}

export default App;

//type
export type LanguageType = 'en' | 'ua'