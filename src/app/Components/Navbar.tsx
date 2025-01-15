"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Buy from "../../../public/Buy.png";
import Love from "../../../public/love.png";
import Indonesia from "../../../public/indonesia.png";
import Profile from "../../../public/Profile.png";
import No from "../../../public/No.png";
import { usePathname } from "next/navigation";

export const AcmeLogo = () => {
    return (
        <Image
            src={Logo}
            width={30}
            height={30}
            alt="Logo"
        />
    );
};

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "Beranda", path: "/" },
        { name: "Tentang Kami", path: "/about" },
        { name: "Produk", path: "/products" },
        { name: "Kontak Kami", path: "/contact" },
        { name: "System", path: "/system" },
        { name: "Deployments", path: "/deployments" },
        { name: "My Settings", path: "/my-settings" },
        { name: "Team Settings", path: "/team-settings" },
        { name: "Help & Feedback", path: "/help-feedback" },
        { name: "Log Out", path: "/logout" },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-slate-300">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="ml">
                    <AcmeLogo />
                    <p className="font-bold text-inherit text-3xl pl-2 text-primary">ARINDAMA</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.slice(0, 3).map((item) => (
                    <NavbarItem key={item.name}>
                        <Link
                            color="primary"
                            href={item.path}
                            className={pathname === item.path ? "font-bold" : ""}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="ml-24">
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1">
                        <Image
                            src={Buy}
                            width={22}
                            height={22}
                            alt="Buy"
                        />
                        chart 
                        <Image
                            src={No}
                            width={22}
                            height={22}
                            alt="No"
                        />
                    </Button>
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Love}
                            width={22}
                            height={22}
                            alt="Love" 
                        />
                    </Button>
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Indonesia}
                            width={22}
                            height={22}
                            alt="Indonesia" 
                        />
                    </Button>
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Profile}
                            width={22}
                            height={22}
                            alt="Profile" 
                        />
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={item.name}>
                        <Link
                            className="w-full"
                            color={index === menuItems.length - 1 ? "danger" : "primary"}
                            href={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
