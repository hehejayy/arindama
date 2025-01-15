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
            alt="Picture of the author"
        />
    );
};

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const menuItems = [
        "Beranda",
        "Tentang Kami",
        "Produk",
        "Kontak Kami",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
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
                <NavbarItem>
                    <Link
                        color="primary"
                        href="/"
                        className={pathname === "/" ? "font-bold" : ""}
                    >
                        Beranda
                    </Link>
                </NavbarItem>
                <NavbarItem>
<<<<<<< HEAD
                    <Link
                        color="primary"
                        href="/about"
                        className={pathname === "/about" ? "font-bold" : ""}
                    >
                        About Us
=======
                    <Link aria-current="page" href="#">
                        Tentang Kami
>>>>>>> f696edbfe8fccf614450e874a357cdb052b84892
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="primary" href="#">
                        Produk
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="ml-24">
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1">
                        <Image
                            src={Buy}
                            width={22}
                            height={22}
                            alt="Picture of the author"
                        />
                        chart 
                        <Image
                            src={No}
                            width={22}
                            height={22}
                            alt="Picture of the author"
                        />
                    </Button>
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Love}
                            width={22}
                            height={22}
                            alt="Picture of the author" 
                        />
                    </Button>
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Indonesia}
                            width={22}
                            height={22}
                            alt="Picture of the author" 
                        />
                    </Button>
                    <Button as={Link} color="primary" href="#" variant="faded" className="mr-1 min-w-5 px-2">
                        <Image
                            src={Profile}
                            width={22}
                            height={22}
                            alt="Picture of the author" 
                        />
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "primary"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
