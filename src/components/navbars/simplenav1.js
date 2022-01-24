import React, { useState } from "react";
import Link from 'next/link';

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className=" fixed w-full">
            <div className="flex flex-wrap py-2">
                <div className="w-full px-4">
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black rounded">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                <Link href='/' passHref >
                                    <a
                                        className=" text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                                    >
                                        MaanasMahato
                                    </a>
                                </Link>
                                <button
                                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (menuOpen ? " flex" : " hidden")
                                }
                                id="example-navbar-info"
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <li className="nav-item">
                                        <Link href='/' passHref >
                                            <a
                                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            >
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='/' passHref >
                                            <a
                                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            >
                                                About
                                            </a>
                                        </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link href='/' passHref >
                                            <a
                                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            >
                                                Contact us
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}