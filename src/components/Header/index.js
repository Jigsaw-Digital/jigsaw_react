import {NavLink} from "react-router-dom";
import '../../index.css';
import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-[#1e1d1d] z-50">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block  h-16  w-auto"
                                        src="/logo.png"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="md:ml-6 md:flex md:items-center md:space-x-4 justify-center">
                                    <div className="flex space-x-4">
                                        {
                                            window.main_menu.map((value, i) => {
                                                return (
                                                    <div key={i}>
                                                        {
                                                            (value.children ? <Menu as="div" className="relative">
                                                                    <Menu.Button as="a" key= {'title-' + value.title}
                                                                                 className="text-white bg-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                                                                        {value.title}
                                                                    </Menu.Button>

                                                                    <Menu.Items as="a" key= {'link-' + value.title}
                                                                                className="origin-top-right absolute right-0 mt-[40px] w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                        {value.children.map((child) => (
                                                                            <Menu.Item as="button" key={'button-' + child.title}>
                                                                                <NavLink
                                                                                    key={child.title}
                                                                                    exact={true}
                                                                                    className="block px-4 py-2 text-sm text-gray-700"
                                                                                    to={{
                                                                                        pathname: `${child.url.replace('https://jigsaw-frontend.test', '')}`,
                                                                                    }}
                                                                                >{child.title}</NavLink>
                                                                            </Menu.Item>
                                                                        ))}
                                                                    </Menu.Items>
                                                                </Menu>
                                                                : <NavLink
                                                                    key={value.title}
                                                                    exact={true}
                                                                    className="text-white bg-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                                    to={{
                                                                        pathname: `${value.url.replace('https://jigsaw-frontend.test', '')}`,
                                                                    }}
                                                                >{value.title}</NavLink>)
                                                        }
                                                    </div>);

                                            })

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}


