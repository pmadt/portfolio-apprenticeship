import React from 'react';

export default function Hobbies({ selectedHobby }) {
    return (
        <div>
            <div className="mt-2 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-3 lg:py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-black">Activité</dt>
                        <dd className="mt-1 text-sm leading-6 text-neutral-600 sm:col-span-2 sm:mt-0">{selectedHobby.title}</dd>
                    </div>
                    <div className="px-4 py-3 lg:py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-black">Date de début</dt>
                        <dd className="mt-1 text-sm leading-6 text-neutral-600 sm:col-span-2 sm:mt-0">{selectedHobby.beginning}</dd>
                    </div>
                    <div className="px-4 py-3 lg:py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-black">Statut</dt>
                        <dd className="mt-1 text-sm leading-6 text-neutral-600 sm:col-span-2 sm:mt-0">
                            {selectedHobby.state === 0 ?
                                <p className={"bg-neutral-200 w-fit px-4 border border-neutral-600"}>
                                    Inactif
                                </p>
                                :
                                <p className={"bg-green-200 px-6 text-green-800 w-fit border border-green-600"}>
                                    Actif
                                </p>
                            }
                        </dd>
                    </div>
                    <div className="px-4 py-3 lg:py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-black">Description</dt>
                        <dd className="mt-1 text-sm leading-6 text-neutral-600 sm:col-span-2 sm:mt-0 text-justify space-y-2">
                            {selectedHobby.content}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
