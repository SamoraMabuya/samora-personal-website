
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/">
                        <Image src="/path-to-your-logo.png" alt="Logo" width={100} height={50} />
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#projects">Projects</Link></li>
                        <li><Link href="#skills">Skills</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
