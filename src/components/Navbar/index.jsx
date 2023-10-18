"use client"

import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { BiSolidHome } from "react-icons/bi";
import InputSearch from "./inputSearch";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4 border-b-2 sticky z-[100] top-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex justify-between items-center text-white gap-4 font-bold">
              <Link href="/">
                <h5 className="font-semibold flex justify-center items-center gap-1">
                  MangaBayo <FcApproval className="text-xl" />
                </h5>
              </Link>
              <ul className="hidden lg:flex space-x-4">
                <li className="text-white">Home</li>
                <li className="text-white">Genre</li>
                <li className="text-white">Release</li>
                <li className="text-white">Movies</li>
              </ul>
              <InputSearch />
            </div>
            <div className="flex lg:hidden">
              <button className="text-white" onClick={toggleMenu}>
                {menuOpen ? (
                  /* Menampilkan tombol tutup (X) saat menu terbuka */
                  <AiOutlineClose className="text-2xl" />
                ) : (
                  /* Menampilkan tombol hamburger saat menu tertutup */
                  <RiMenu3Fill className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {menuOpen && (
            <ul className="flex flex-col space-y-4 mt-4 text-white ">
              <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                <NavLink to="/" className="flex items-center gap-2">
                  <BiSolidHome /> Home
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
