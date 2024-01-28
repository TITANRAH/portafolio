'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

// next hooks


interface Props {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

interface Link {
  path: string;
  name: string;
}

const links: Link[] = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "Mis Proyectos",
  },
  {
    path: "/contact",
    name: "Contacto",
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }: Props) => {
  const path = usePathname()
  
  return (
    <nav className={`${containerStyles}`}>
      {links.map((l, index) => (
        <Link 
          href={l.path} 
          key={index} 
          className={`capitalize ${linkStyles}`}>

            {/* si el path del array recorrido es igual al path de la url haz eso */}
          {l.path === path && (
            <motion.span
                initial={{y: '-100%'}} 
                animate={{y: 0}} 
                transition={{type: 'tween'}}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
          )}
          {l.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
