import React from 'react';
import ResumeSection from './ResumeSection';
import Button from './Button';
import {BsCheck2, BsGithub, BsLinkedin} from 'react-icons/bs';
import {BiLogoGmail} from 'react-icons/bi';

const techStack = [
    'Java',
    'PHP',
    'Laravel',
    'React',
    'NodeJS',
    'JavaScript',
    'PostgreSQL',
    'MySQL,PLSQL',
    'Bash',
    'Git',
    'Tailwind',
    'Figma',
];

const languages = [
    {name: 'Français', flag: '/img/france-flag.png', level: 'Langue maternelle'},
    {name: 'Anglais', flag: '/img/united-kingdom-flag.png', level: 'Avancé'},
    {name: 'Espagnol', flag: '/img/spain-flag.png', level: 'Élémentaire'},
];

export default function Resume({openPdfInNewTab}) {
    return (
        <div className="justify-center h-screen pt-52 bg-soft-grey">
            <div className="flex">
                <h1 className="text-7xl font-bold">Bienvenue sur mon Portfolio!</h1>
                <div className="border h-fit p-2 border-azur-blue hover:border-ruby-red">
                    <Button
                        className="font-bold px-10 py-3 w-56 h-fit hover:bg-azur-blue-hover bg-azur-blue text-white"
                        onClick={() => openPdfInNewTab('/CV0510GEN.pdf')}
                    >
                        Visualiser mon CV
                    </Button>
                </div>
            </div>
            <p className="mt-2 text-3xl text-left w-11/12">
                Je suis <span
                className="text-ruby-red whitespace-nowrap"><u><strong>Paul ADNET</strong></u></span>,<br/>
                20 ans et étudiant en 1ère année de <strong>Master MIAGE</strong> à l'université Panthéon-Sorbonne.
            </p>

            <div className="flex space-x-5 mt-4">
                {/* Parcours académique */}
                <ResumeSection title="Parcours académique" content={
                    <ul>
                        <li className="flex items-center"><BsCheck2 className="mr-1"/>Licence MIASHS parcours MIAGE</li>
                        <li className="flex items-center"><BsCheck2 className="mr-1"/>DUT Informatique</li>
                        <li className="flex items-center"><BsCheck2 className="mr-1"/>Bac Scientifique (Mention bien)
                        </li>
                    </ul>
                }>
                </ResumeSection>

                {/* Stack technologique */}
                <ResumeSection title="Stack technologique" content={
                    <div className="flex flex-wrap w-96">
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex items-center">
                                <p className="bg-green-400 whitespace-nowrap m-1">{tech}</p>
                            </div>
                        ))}
                    </div>
                }>

                </ResumeSection>

                {/* Langues */}
                <ResumeSection title="Langues" content={
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index} className="flex items-center">
                                <img src={language.flag} className="w-6 mr-1" alt={`${language.name} flag`}/>
                                {language.name} ({language.level})
                            </li>
                        ))}
                    </ul>
                }>
                </ResumeSection>
            </div>

            <div className="mt-16 flex justify-center">
                <div
                    className="hover:border hover:border-neutral-600 hover:border-dashed shadow-inner px-20 py-3 w-fit flex space-x-3 rounded">
                    <a href="https://github.com/pmadt" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="cursor-pointer text-2xl hover:bg-ruby-red"/>
                    </a>
                    <a href="https://www.linkedin.com/in/adnetpaul/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="cursor-pointer text-2xl hover-bg-ruby-red"/>
                    </a>
                    <a href="mailto:adnetpaul6@gmail.com">
                        <BiLogoGmail className="cursor-pointer text-2xl hover:bg-ruby-red"/>
                    </a>
                </div>
            </div>
        </div>
    );
}