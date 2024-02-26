"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
            </Link>
            <Link href={"/skills"}>
            <MenuItem setActive={setActive} active={active} item="Skills"></MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Hobby</HoveredLink>
            <HoveredLink href="/">Individual</HoveredLink>
            <HoveredLink href="/">Team</HoveredLink>    
            <HoveredLink href="/">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar