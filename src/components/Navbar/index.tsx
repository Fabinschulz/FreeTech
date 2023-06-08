'use client';
import { X } from '@phosphor-icons/react';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Header: FunctionComponent<any> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#081b29] fixed w-full">
            <nav className="flex justify-between items-center h-16 text-white relative drop-shadow-lg font-sans max-w-7xl mx-auto px-[24px]">
                <Link href="#" className="text-white text-3xl hover:text-sky-500">
                    FreeTech
                </Link>
                <div className="hidden md:flex gap-4 text-lg">
                    <Link href="/" className="hover:text-sky-500 ">
                        Home
                    </Link>
                    <Link href="/a-empresa" className="hover:text-sky-500">
                        A Empresa
                    </Link>
                    <Link href="/servicos" className="hover:text-sky-500">
                        Serviços
                    </Link>
                    <Link href="/contato" className="hover:text-sky-500">
                        Contato
                    </Link>
                </div>
                <div className="flex items-center md:hidden">
                    <button
                        type="button"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <X size={28} weight="light" aria-hidden="true" />
                        ) : (
                            <HiOutlineMenuAlt4 size={28} aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>
            <nav className={`${isMenuOpen ? '' : 'hidden'} md:hidden`}>
                <div className="flex flex-col text-white font-sans text-base px-6 pt-2 space-y-3  drop-shadow-2xl">
                    <Link href="/" className="hover:text-sky-500">
                        Home
                    </Link>
                    <Link href="/a-empresa" className="hover:text-sky-500">
                        A Empresa
                    </Link>
                    <Link href="/servicos" className="hover:text-sky-500">
                        Serviços
                    </Link>
                    <Link href="/contato" className="hover:text-sky-500">
                        Contato
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
