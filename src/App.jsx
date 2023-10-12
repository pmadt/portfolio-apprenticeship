import {useState} from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Hobbies from "./components/Hobbies";

import "./App.css";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Button from "./components/Button";
import {MdKeyboardArrowRight} from "react-icons/md";

const projects = {
    project1: {
        title: "Zeldiablo",
        type: "DUT Informatique",
        resume: "Création d'un jeu vidéo en Java.",
        content:
            "Évolution du personnage dans un labyrinthe piégé de monstres et d'obstacles. Génération des labyrinthes via la lecture de fichiers textes.",
        stack: "Java",
        lien: "https://github.com/youngboi02/Zeldiablo",
        image: "",
    },
    project2: {
        title: "Gestionnaire de stock",
        type: "projet personnel",
        resume:
            "Développement d'une application de gestion de stock d'un inventaire.",
        content:
            "Recueil de données d'APIs pour suivi en direct des ventes mondiales.\nPermet de suivre les entrées et sorties de produits. États détaillés (réception, estimation, localisation) des produits.",
        stack: "React, NextJS, TailwindCSS, PostgreSQL",
        lien: "",
        image: "",
    },
    project3: {
        title: "Eteins La Lumière",
        type: "DUT Informatique",
        resume: "Projet universitaire.",
        content:
            "Interface graphique où l'utilisateur doit éteindre toutes les lumières d'un plateau de jeu",
        stack: "Java, JavaSwing",
        lien: "https://github.com/youngboi02/Eteins-la-lumiere",
        image: "",
    },

    project4: {
        title: "Portfolio",
        type: "projet personnel",
        resume: "Développement d'un portfolio.",
        content: "",
        stack: "React, TailwindCSS, Vite",
        lien: "",
        image: "",
    },
};

const hobbies = {
    0: {
        title: "Mode/Sneakers",
        beginning: "Depuis 5 ans",
        state: 1,
        content: (
            <p>
                J'ai toujours été sensible au monde de la mode streetwear. Ma rencontre
                avec un ami de DUT m'a permis de me lancer sérieusement dans ce domaine.
                <br/>
                <br/>
                J'ai développé un réel intérêt dans ce domaine, je participe à des
                évènements en lien avec l'histoire de la mode et des sneakers. Je
                possède une collection de sneakers.
                <br/>
                <br/>
                Me contacter pour plus d'informations (
                <u>
                    <strong>vente</strong>
                </u>
                ).
            </p>
        ),
    },
    1: {
        title: "Musculation",
        beginning: "Depuis 2 ans",
        state: 1,
        content:
            "Après le kick-boxing, j'ai commencé la musculation dans une recherche de performance et d'esthétique. J'ai commencé à m'entraîner sérieusement en 2022.",
    },
    2: {
        title: "Cinéma",
        beginning: "Depuis plus de 10 ans",
        state: 1,
        content: (
            <p>
                Petit, j'ai été bercé dans la saga 'The Dark Knight' de Nolan, des
                'Amazing Spiderman' de Marc Webb et de la saga Star Wars. J'ai développé
                un réel intérêt pour le cinéma et les séries.
                <br/>
                <br/>
                Récemment, j'ai appris à me diversifier dans mes choix de films/séries
                grâce à une personne qui m'est chère. Grâce à elle, j'ai développé
                davantage mon sens critique et souscrit à un abonnement UGC Illimité.
            </p>
        ),
    },
    3: {
        title: "KickBoxing",
        beginning: "2018-2021 (3 ans)",
        state: 0,
        content: (
            <p>
                Les sports de combat me passionnent, en particulier la boxe anglaise, le
                muay-thaï et le kickboxing. <br/>
                <br/>
                J'ai débuté avec des amis et un sac de frappe. Puis, j'ai rejoint le
                club de Verdun. J'ai pratiqué le kickboxing pendant 3 ans. <br/>
                <br/>
                Je ne pratique plus mais je souhaiterais reprendre sérieusement.
            </p>
        ),
    },
};

export default function App() {
    const openPdfInNewTab = (source) => {
        window.open(source, "_blank");
    };

    const [selectedHobby, setSelectedHobby] = useState(hobbies[0]);

    const handleHobbyClick = (hobby) => {
        setSelectedHobby(hobby);
        console.log("hobby", hobby);
    };

    return (
        <>
            <div className="bg-soft-grey font-Fira selection:bg-neutral-300">
                <Header/>
                <div className={"lg:mx-20 "}>
                    <div id={"section1"}>
                        <Resume openPdfInNewTab={openPdfInNewTab}/>
                    </div>

                    <Divider/>

                    <div
                        className="my-24 lg:mt-0 lg:py-6 lg:px-16 h-fit lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center"
                        id="section2"
                    >
                        <div className={"flex justify-center"}>
                            <h1 className="text-2xl lg:text-2xl font-bold w-fit ">Rythme d'alternance</h1>
                        </div>
                        <div className="mt-4 ">
                            <p className="flex items-center ">
                                <MdKeyboardArrowRight className={""}/>
                                Contrat d'<strong> apprentissage</strong>{" "}OU de
                                professionnalisation (certaines conditions sont requises).
                            </p>
                            <p className="flex items-center">
                                <MdKeyboardArrowRight/>
                                Parcours alterné de&nbsp;<strong>1013h</strong>&nbsp;sur 24
                                mois.
                            </p>
                            <p className="flex items-center">
                                <MdKeyboardArrowRight/>
                                Rythme d'alternance :
                            </p>
                            <ul className="list-disc ml-12">
                                <li>
                                    <span className="">2 à 3 semaines</span> en formation
                                </li>
                                <li className="lg:font-bold">2 à 3 semaines en entreprise</li>
                            </ul>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                className="mt-8 font-bold px-10 py-3 w-56 h-fit hover:bg-azur-blue-hover bg-azur-blue text-white"
                                onClick={() => {
                                    openPdfInNewTab("/Calendrier Alternance 2023.pdf");
                                }}
                            >
                                Planning M1/M2
                            </Button>
                        </div>
                    </div>

                    <Divider/>

                    <div
                        className="justify-center px-16 flex flex-col items-center h-fit lg:h-screen pt-12 mb-12 lg:mb-0"
                        id={"section3"}
                    >
                        <p className={"text-2xl font-bold w-fit"}>Projets</p>
                        <div className={"mt-3"}>
                            <p className={"text-center"}>
                                Ci-dessous quelques projets réalisés au cours des dernières
                                années.
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 mt-1">
                                <Project
                                    projectKey="project1"
                                    projects={projects}
                                    globalClasses={""}
                                />
                                <Project
                                    projectKey="project2"
                                    projects={projects}
                                    globalClasses={""}
                                />
                                <Project
                                    projectKey="project3"
                                    projects={projects}
                                    globalClasses={""}
                                />
                                <Project
                                    projectKey="project4"
                                    projects={projects}
                                    globalClasses={""}
                                />
                            </div>
                        </div>
                    </div>

                    <Divider/>

                    <div
                        className="px-16 pb-12 h-fit lg:h-screen pt-12 lg:pt-0 flex flex-col justify-center items-center"
                        id="section4"
                    >
                        <div className={"flex justify-center"}>
                            <p className="text-2xl font-bold w-fit mb-4 ">
                                Passions et activités
                            </p>
                        </div>

                        <div className="lg:px-4 sm:px-0 lg:flex lg:space-x-2 lg:mt-1 grid gap-2">
                            {Object.values(hobbies).map((hobby, index) => (
                                <Button
                                    key={index}
                                    children={hobby.title}
                                    onClick={() => handleHobbyClick(hobby)}
                                    otherClasses={
                                        selectedHobby === hobby ? " text-green-500" : ""
                                    }
                                />
                            ))}
                        </div>

                        <div className="h-200 lg:h-80">
                            <Hobbies selectedHobby={selectedHobby}/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    );
}
