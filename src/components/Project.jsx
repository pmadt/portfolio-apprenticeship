import React from 'react';
import {BsCodeSlash} from "react-icons/bs";
import {PiCodeFill} from "react-icons/pi";
import {HiCodeBracketSquare} from "react-icons/hi2";

export default function Project({ projectKey, projects, globalClasses }) {
    const { title, content, stack, lien, image, resume, type } = projects[projectKey];

    // Définir une classe CSS dynamique en fonction du type de projet
    let projectTypeClass = "";

    switch (type) {
        case "DUT Informatique":
            projectTypeClass = "bg-blue-50 text-blue-500 ring-blue-500/50";
            break;
        case "Licence MIAGE":
        case "projet personnel":
            projectTypeClass = "bg-green-50 text-green-500 ring-green-500/50";
            break;
        default:
            projectTypeClass = "bg-gray-50 text-gray-500 ring-gray-500/50";
    }

    const contentLines = content.split('\n');

    return (
        <>
            <div className={`border-neutral-600 border flex flex-col rounded p-2 px-6 w-72 lg:w-150  ${globalClasses}`}>
                <div className="lg:flex mb-1">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <span
                        className={`lg:ml-2 inline-flex flex-shrink-0 items-center rounded-md py-1 lg:py-0 px-3 ring-1 lg:ring-0 lg:px-1.5 text-xs font-medium ${projectTypeClass} `}>
                        {type}
                    </span>
                </div>
                <div>
                    <p className={"text-neutral-500 italic text-sm"}>{resume}</p>
                </div>
                <div className={"mt-4 flex-grow"}>
                    <p className={"lg:text-justify text-sm"}>
                        {contentLines.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </p>
                </div>
                <div className="mt-6 ">
                    <div className={"lg:flex lg:items-center"}>
                        <div className={"lg:block flex justify-center"}>
                            <HiCodeBracketSquare className={"text-2xl text-neutral-800 "}/>
                        </div>
                        <p className={"text-sm lg:ml-1 text-center"}>{stack}</p>
                    </div>

                    <div className={"flex text-sm lg:justify-between lg:items-end justify-center"}>
                        {lien === "" ? (
                            <span className={"text-neutral-500"}>pas de lien public</span>
                        ) : (
                            <a href={lien} className={"text-blue-500 hover:underline"}>
                                Lien vers GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
