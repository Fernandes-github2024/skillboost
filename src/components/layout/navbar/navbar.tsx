"use client";
import Link from "next/link";
import { menuLinks } from "../../../utils/menuLinks";
import { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-[var(--tertiary)] lg:shadow-md">
      {/*Desktop*/}
      <div className="shadow-[2px_2px_5px_0_rgba(0,0,0,0.1)] lg:shadow-none flex items-center justify-between p-4 sm:p-6 lg:p-8">
        <div>
          <Link href="/">
            <h1 className="text-xl lg:text-2xl font-extrabold text-[var(--primary)]">
              SKILL<span className="text-[var(--secondary)]">BOOST</span>
            </h1>
          </Link>
        </div>
        <ul className="hidden lg:flex gap-2">
          {menuLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="tracking-wide hover:text-[var(--secondary)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-2">
          <button className="tracking-wide py-2 px-4 bg-[var(--primary)] rounded-md cursor-pointer">
            Entrar
          </button>
          <button className="tracking-wide py-2 px-4 bg-[var(--secondary)] rounded-md cursor-pointer">
            Inscrever-se
          </button>
        </div>
        {/*Button Mobile*/}
        <button onClick={handleToggle} className="lg:hidden text-xl cursor-pointer">
          {show ? <RiCloseLine /> : <RiMenu4Line />}
        </button>
      </div>

      {/*Mobile Menu*/}
      <div className="lg:hidden">
        {show ? (
          <div className="min-h-screen">
            <ul className="flex flex-col gap-2 p-4 sm:p-6 lg:p-8">
              {menuLinks.map((link) => (
                <li key={link.id} className="py-2 px-12 -mx-8 hover:bg-[var(--secondary)] shadow-[2px_2px_5px_0_rgba(0,0,0,0.1)] cursor-pointer">
                  <Link href={link.href} className="">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 p-4">
              <button className="tracking-wide py-2 px-4 bg-[var(--primary)] rounded-md cursor-pointer">
                Entrar
              </button>
              <button className="tracking-wide py-2 px-4 bg-[var(--secondary)] rounded-md cursor-pointer">
                Inscrever-se
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
