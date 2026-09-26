
import Image from 'next/image';
import logo from '@/assets/logo.png'
import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto flex justify-between mt-20 mb-4'>
            <div className='flex'>
                <Image src={logo} alt="logo-image" />
                          <a className="btn btn-ghost text-xl">FITLOG</a>
            </div>

            <div>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;