'use client'

import React from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header(){
  return (
    <header>
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-6">
            {/* nav */}

     

            <Nav />
            <ThemeToggler />

            {/* mobile nav */}
            <div className="">

              <MobileNav />
            </div>
    
           
          </div>
        </div>
      </div>
    </header>
  );
};


