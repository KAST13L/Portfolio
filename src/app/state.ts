import {LinksNameType, SkillsNameType} from "../common/svgSelector/SvgSelector";
import bgImg from '../assets/image/intro-bg-2.jpg'
import SocialNetworkImg from '../assets/image/SocialNetwork.jpg'
import tidoListImg from '../assets/image/Todolist.jpg';
import LearningCardsImg from '../assets/image/LearningCards.png';

const headerLinks: LinksType[] = [
    {href: 'https://github.com/KAST1EL', svgName: 'GitHub'},
    {href: 'https://www.instagram.com/smykdav/', svgName: 'Instagram'},
    {href: 'https://www.linkedin.com/', svgName: 'Linkedin'},
]

const contactsLinks: LinksType[] = [
    {href: 'https://github.com/KAST1EL', svgName: 'GitHub'},
    {href: 'https://www.instagram.com/smykdav/', svgName: 'Instagram'},
    {href: 'https://www.linkedin.com/', svgName: 'Linkedin'},
    {href: 'https://www.codewars.com/users/KAST13L', svgName: 'CodeWars'},
]

const arrSkills: string[] = ['React', 'JavaScript', 'Redux', 'TypeScript', 'Formik', 'Axios', 'Material-ui', 'HTML/CSS', 'SASS/LESS', 'Storybook', 'Postman', 'Unit Testing', 'Git']

const call: string = '+380 (50) 879-17-62'

export const state: StateType = {
    en: {
        headerComponent: {
            menuName: 'Menu',
            nav: [
                {href: 'home', navName: 'Home'},
                {href: 'about', navName: 'About'},
                {href: 'skills', navName: 'Skills'},
                {href: 'projects', navName: 'Portfolio'},
                {href: 'contacts', navName: 'Contact'},
            ],
            headerLinks
        },
        mainComponent: {
            h1: `Hi, I'm a developer`,
            arrSkills,
            location: 'based in Lviv, Ukraine.',
            a1: 'View My Works',
            a2: 'Contact Me',
            photo: 'https://th-thumbnailer.cdn-si-edu.com/qgJ75SrDxQDP3v84BCujl7QRJDE=/fit-in/1600x0/filters:focal(530x193:531x194)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/9a/c6/9ac678fc-5f74-4c6f-9e1f-1effe9b2e1b0/01-star-power-carl-sagan.jpg'
        },
        aboutMeComponent: {
            span: 'About Me',
            title: 'Know Me More',
            h2: `Hi, I'm `,
            name: 'Davyd Smyk',
            aboutMe: 'I\'m a developer with experience building SPAs using React/Redux/TypeScript/HTML&CSS/SCSS. I like to develop applications that bring real value to the end user. Now I am improving my skills in this area and expanding my knowledge with new technologies (Node.js). I spend my free time reading educational literature, as well as improving my English.',
            contacts: [
                {title: 'Name:', info: 'Davyd Smyk'},
                {title: 'Email:', info: 'smykdav@gmail.com'},
                {title: 'Date of birth:', info: '08 June, 1999'},
                {title: 'From:', info: 'Lviv, Ukraine.'},
            ]
        },
        skillsComponent: {
            span: 'What I Do?',
            title: 'How I can help your next project',
            skills: [
                {
                    svgName: 'React',
                    description: 'An open source JavaScript library for developing user interfaces. Can be used to develop single page and mobile applications.'
                },
                {
                    svgName: 'Redux',
                    description: 'An open source JavaScript library for managing application state.'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'
                },
                {
                    svgName: 'TypeScript',
                    description: 'A programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript.'
                },
                {
                    svgName: 'Formik',
                    description: 'A library that helps you work with forms. It simplifies getting data from a form, validating data, displaying error messages, and more.'
                },
                {
                    svgName: 'Axios',
                    description: 'An open source library that allows you to make HTTP requests.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'A framework that produces ready-made Google solutions for fast and fairly simple web development.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'A set of tools for creating sites and web applications. Includes HTML and CSS design templates for typography, web forms, buttons, labels, navigation blocks, and more.'
                },
                {
                    svgName: 'HTML',
                    description: 'The standard markup language for documents designed to be displayed in a web browser.'
                },
                {
                    svgName: 'CSS',
                    description: 'A Style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML'
                },
                {
                    svgName: 'SASS',
                    description: 'A CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files.'
                },
                {
                    svgName: 'LESS',
                    description: 'Dynamic style language. It was influenced by the Sass style language, and in turn influenced its new "SCSS" syntax.'
                },
                {
                    svgName: 'Storybook',
                    description: 'A UI library that can be used to document components. It also allows you to organize and assemble components.'
                },
                {
                    svgName: 'Postman',
                    description: 'An API platform that allows developers to design, build, test, and iterate their APIs.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Tests that take a screenshot of the screen (reference screenshot) and compare it with the actual screenshot that is taken during the test run.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'The process of programming, checking the correctness of individual modules of the source code of programs.'
                },
                {
                    svgName: 'Git',
                    description: 'A free and open source distributed version control system designed to process any project quickly and efficiently.'
                },
            ]
        },
        projectsComponent: {
            span: 'Portfolio',
            title: 'Some of my most recent projects',
            projects: [
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'An online platform that is used for communication, dating, creating social relationships between people...',
                    href: 'https://github.com/KAST1EL'
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...',
                    href: 'https://github.com/KAST1EL'
                },
                {
                    title: 'Learning Cards',
                    img: LearningCardsImg,
                    description: 'Is a card bearing information, which is intended to be used as an aid in memorization. Flashcards are often used to memorize vocabulary, historical dates...',
                    href: 'https://github.com/KAST1EL'
                },

            ]
        },
        distantWorkComponent: {
            title: 'Interested in working with me?',
            a: 'Hire Me!',
            bgImg
        },
        contactsComponent: {
            title: 'Let\'s get in touch',
            p: 'Please share as much info, as possible so we can get the most out of our first catch-up. I will be glad to work with you if my skills and experience suit you. Willing to talk over the phone or in person.',
            h3: 'Call:',
            call,
            contactsLinks,
            name: 'What is Your Name:',
            email: 'Your Email Address:',
            formMessage: 'How can I Help you?:',
            button: 'Send'

        },
        footerComponent: {
            copyright: 'Copyright © 2022. All Rights Reserved.',
            designed: 'Developed by Davyd Smyk'
        }
    },
    ua: {
        headerComponent: {
            menuName: 'Меню',
            nav: [
                {href: 'home', navName: 'Головна'},
                {href: 'about', navName: 'Про мене'},
                {href: 'skills', navName: 'Скіли'},
                {href: 'projects', navName: 'Проєкти'},
                {href: 'contacts', navName: 'Контакти'},
            ],
            headerLinks
        },
        mainComponent: {
            h1: `Привіт`,
            arrSkills,
            location: 'Львів, Україна.',
            a1: 'Мої роботи',
            a2: 'Зв\'язатися із мною',
            photo: 'https://th-thumbnailer.cdn-si-edu.com/qgJ75SrDxQDP3v84BCujl7QRJDE=/fit-in/1600x0/filters:focal(530x193:531x194)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/9a/c6/9ac678fc-5f74-4c6f-9e1f-1effe9b2e1b0/01-star-power-carl-sagan.jpg' // need download real photo
        },
        aboutMeComponent: {
            span: 'Про мене',
            title: 'Дізнатися про мене більше',
            h2: 'Привіт, мене звати ',
            name: 'Давид Смик',
            aboutMe: 'Я – розробник, маючий досвід створення SPA з використанням React/Redux/TypeScript/HTML&CSS/SCSS. Мені подобається розробляти застосунки, які приносять реальну користь кінцевому користувачу. Зараз я покращую свої навички в цьому напрямку і розширюю знання новими технологіями. Вільний час проводжу за читанням навчальної літератури та поліпшенням англійської мови.',
            contacts: [
                {title: 'І\'мя:', info: 'Давид Смик'},
                {title: 'Email:', info: 'smykdav@gmail.com'},
                {title: 'Дата народження:', info: '08.06.1999'},
                {title: 'Місцезнаходження:', info: 'Львів, Україна.'},
            ]
        },
        skillsComponent: {
            span: 'Що я вмію?',
            title: 'Мої навички',
            skills: [
                {
                    svgName: 'React',
                    description: 'JavaScript-бібліотека з відкритим вихідним кодом для розробки інтерфейсів користувача. Може використовуватися для розробки односторінкових та мобільних додатків.'
                },
                {
                    svgName: 'Redux',
                    description: 'Бібліотека для JavaScript з відкритим кодом, призначена для керування станом/даними програми.'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Мультипарадигмова мова програмування. Підтримує об\'єктно-орієнтований, імперативний та функціональний стилі.'
                },
                {
                    svgName: 'TypeScript',
                    description: 'Мова програмування, представлена Microsoft у 2012 році і позиціонується як засіб розробки веб-додатків, що розширює можливості JavaScript.'
                },
                {
                    svgName: 'Formik',
                    description: 'Бібліотека допомагає працювати з формами. Вона спрощує отримання даних із форми, валідацію даних, виведення повідомлень про помилки та багато іншого.'
                },
                {
                    svgName: 'Axios',
                    description: 'Бібліотека з відкритим вихідним кодом дозволяє робити HTTP-запити.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'Фреймворк, що надає готові google рішення для швидкої і досить простої веб-розробки.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'Набір інструментів для створення сайтів та веб-додатків. Включає HTML- і CSS-шаблони оформлення для типографіки, веб-форм, кнопок, міток, блоків навігації і т.д.'
                },
                {
                    svgName: 'HTML',
                    description: 'Стандартизована мова гіпертекстової розмітки документів для перегляду веб-сторінок у браузері.'
                },
                {
                    svgName: 'CSS',
                    description: 'Формальна мова опису зовнішнього вигляду документа, написаного за допомогою мови розмітки.'
                },
                {
                    svgName: 'SASS',
                    description: 'Метамова на основі CSS, призначена для збільшення рівня абстракції CSS-коду та спрощення файлів каскадних таблиць стилів.'
                },
                {
                    svgName: 'LESS',
                    description: 'Динамічна мова стилів. Він створений під впливом мови стилів Sass, і, у свою чергу, вплинув на новий синтаксис «SCSS».'
                },
                {
                    svgName: 'Storybook',
                    description: 'Бібліотека UI, яку можна використовувати для документування компонентів. Також вона дозволяє впорядковувати та збирати компоненти.'
                },
                {
                    svgName: 'Postman',
                    description: 'Платформа API, що дозволяє розробникам проектувати, створювати, тестувати та повторювати свої API.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Тести, які роблять скріншот екрану (еталонний скріншот) та порівнюють з актуальним скріншотом, який робиться під час прогону тестів.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'Процес програмування, що дозволяє перевірити на коректність окремі модулі вихідного коду програми.'
                },
                {
                    svgName: 'Git',
                    description: 'Безкоштовна розподілена система керування версіями з відкритим вихідним кодом, призначена для швидкої та ефективної обробки будь-яких проектів.'
                },
            ]
        },
        projectsComponent: {
            title: 'Деякі із моїх останіх проєктів',
            span: 'Портфоліо',
            projects: [
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'Онлайн-платформа, яка використовується для спілкування, знайомств, створення соціальних відносин між людьми...',
                    href: 'https://github.com/KAST1EL'
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'Список справ, які вам потрібно виконати або те, що ви хочете зробити. При виконанні завдання її зазвичай викреслюють зі списку...',
                    href: 'https://github.com/KAST1EL'
                },
                {
                    title: 'Learning Cards',
                    img: LearningCardsImg,
                    description: 'Являє собою картку з інформацією, яка призначена для допомоги у запам\'ятовуванні. Картки часто використовуються для запам\'ятовування лексики, історичних дат...',
                    href: 'https://github.com/KAST1EL'
                },
            ]
        },
        distantWorkComponent: {
            title: 'Зацікавлені працювати зі мною?',
            a: 'Зв\'язатися із мною',
            bgImg
        },
        contactsComponent: {
            title: 'Контакти',
            p: 'Будь ласка, поділіться якомога більшою кількостю інформації, щоб ми могли отримати максимальну віддачу від нашої першої зустрічі. Радий працюватиму з вами, якщо мої навички та досвід підійдуть вам. Готовий поспілкуватися по телефону чи особисто.',
            h3: 'Тел:',
            call,
            contactsLinks,
            name: 'Ваше ім\'я:',
            email: 'Адрес електроної пошти:',
            formMessage: 'Чим я можу допомогти?:',
            button: 'Відправити'
        },
        footerComponent: {
            copyright: 'Copyright © 2022. Всі права захищені.',
            designed: 'Розробив Давид Смик'
        }
    },
}

//type
type StateType = {
    [key: string]: {
        headerComponent: HeaderComponentType
        mainComponent: MainComponentType
        aboutMeComponent: AboutMeComponent
        skillsComponent: SkillsComponentsType
        projectsComponent: ProjectsComponentsType
        distantWorkComponent: DistantWorkComponentType
        contactsComponent: ContactsComponentType
        footerComponent: FooterComponentType
    }
}

export type HeaderComponentType = {
    menuName: string
    nav: NavType[]
    headerLinks: LinksType[]
}

export type NavType = {
    href: HrefNavType
    navName: string
}

type HrefNavType = 'home' | 'skills' | 'projects' | 'contacts' | 'about'

export type LinksType = {
    href: string
    svgName: LinksNameType
}

export type MainComponentType = {
    h1: string
    arrSkills: string[]
    location: string
    a1: string
    a2: string
    photo: string
}

export type AboutMeComponent = {
    span: string
    title: string
    h2: string
    name: string
    aboutMe: string
    contacts: ContactsType[]
}

type ContactsType = {
    title: string
    info: string
}

export type SkillsComponentsType = {
    span: string
    title: string
    skills: SkillType[]
}

type SkillType = {
    svgName: SkillsNameType
    description: string
}

export type ProjectsComponentsType = {
    span: string
    title: string
    projects: ProjectType[]
}

type ProjectType = {
    title: string
    img: string
    description: string
    href: string
}

export type DistantWorkComponentType = {
    title: string
    a: string
    bgImg: string
}

export type ContactsComponentType = {
    title: string
    p: string
    h3: string
    call: string
    contactsLinks: LinksType[]
    name: string
    email: string
    formMessage: string
    button: string
}

export type FooterComponentType = {
    copyright: string
    designed: string
}