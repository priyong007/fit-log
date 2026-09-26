
'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WorksContext } from '@/context/WorksContext';

const Navbar = () => {
  const { addplan, saveLater } = useContext(WorksContext);
  const pathname = usePathname();

  return (
    <nav className="bg-[#0C0D10]">
      <div className="navbar shadow-sm container mx-auto">

        {/* LEFT SIDE */}
        <div className="navbar-start">

          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/workouts"
                  className={
                    pathname === '/workouts'
                      ? ' text-[#C2F800] font-semibold'
                      : ''
                  }
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={
                    pathname === '/my-plan'
                      ? ' text-[#C2F800] font-semibold'
                      : ''
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              className="inline"
              src={logo}
              alt="logo-image"
            />

            <p className="btn btn-ghost text-xl">
              FITLOG
            </p>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <Link
                href="/workouts"
                className={`rounded-lg px-4 py-2 transition ${
                  pathname === '/workouts'
                    ? ' text-[#C2F800] font-semibold'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={`rounded-lg px-4 py-2 transition ${
                  pathname === '/my-plan'
                    ? ' text-[#C2F800] font-semibold'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end gap-2">

          <Link href="/my-plan" className="btn">
            Plan
            <span className="rounded-full bg-yellow-300 px-2 text-black">
              {addplan.length}
            </span>
          </Link>

          <Link href="/saved" className="btn">
            Saved
            <span className="rounded-full border-2 border-[#D1D5DB] px-2">
              {saveLater.length}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
