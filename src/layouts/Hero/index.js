import React from 'react';
import $ from 'jquery';
import '../../packages/pagepiling/pagepiling';
import '../../packages/pagepiling/pagepiling.css';
import '../../index.css';
import {NavLink} from "react-router-dom";
import {renderLayouts} from "../../helpers/wp";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeroLayout(layout) {
    console.log(layout);

    return (
        <div className=" bg-white">
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0 bg-gray-100"/>
                <div className="mx-auto ">
                    <div className="relative shadow-xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover opacity-30"
                                src={layout.attrs.background_image}
                                alt="People working on laptops"
                            />
                            <div className="absolute inset-0 bg-[#d8902d] mix-blend-multiply"/>
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-80 lg:px-8">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white tracking-wide">{layout.attrs.title}</span>
                                <span
                                    className="block text-[#d8902d] white-text-border tracking-wide">{layout.attrs.sub_title}</span>
                            </h1>
                            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                                {layout.attrs.description}
                            </p>
                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div className="space-y-4 sm:space-y-0 sm:mx-auto ">
                                    {
                                        (layout.attrs.links ? layout.attrs.links.map((link_object, i) => {
                                            return <NavLink as="a"
                                                            key={link_object.link.title}
                                                            exact={true}
                                                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black bg-opacity-100 hover:bg-opacity-70 sm:px-8"
                                                            to={{
                                                                pathname: `${link_object.link.url.replace('https://jigsaw-frontend.test', '')}`,
                                                            }}
                                            >{link_object.link.title}</NavLink>;
                                        }) : '')
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                        Trusted by clients of all sizes
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                 alt="Tuple"/>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                                 alt="Mirage"/>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                alt="StaticKit"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                alt="Transistor"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                alt="Workcation"
                            />
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </div>
        </div>
    );

}

