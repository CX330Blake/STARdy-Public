import React from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import logo from "../../src/assets/favicon.ico";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLocation } from "react-router-dom";
import LoginModal from "../pages/components/LoginModal";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        { name: "Home", hrefs: ["/", "/home"] },
        { name: "About", hrefs: ["/about"] },
        { name: "Planets", hrefs: ["/planets"] },
        { name: "Dashboard", hrefs: ["/dashboard"] },
    ];

    const navbarItems = [
        { name: "Home", hrefs: ["/", "/home"] },
        { name: "About", hrefs: ["/about"] },
        { name: "Planets", hrefs: ["/planets"] },
        { name: "Dashboard", hrefs: ["/dashboard"] },
    ];

    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (hrefs) => hrefs.some((href) => href === currentPath);

    return (
        <NextUINavbar
            className="bg-opacity-30"
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            isBlurred
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link
                        href="/"
                        color={isDarkMode ? "foreground" : "primary"}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                width: "32px",
                                height: "32px",
                                marginRight: "8px",
                            }}
                        />
                        <p className="font-bold text-inherit text-xl">STARdy</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link
                        href="/"
                        color={isDarkMode ? "foreground" : "primary"}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                width: "32px",
                                height: "32px",
                                marginRight: "8px",
                            }}
                        />
                        <p className="font-bold text-inherit text-2xl font-mono">
                            STARdy
                        </p>
                    </Link>
                </NavbarBrand>

                {navbarItems.map((item) => (
                    <NavbarItem key={item.name} className="font-mono">
                        <Link
                            color={
                                isActive(item.hrefs)
                                    ? "secondary"
                                    : "foreground"
                            }
                            href={item.hrefs[0]}
                            className="text-large  hover:underline hover:text-secondary underline-offset-4"
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <LoginModal
                        buttonText="Sign Up"
                        buttonVariant="solid"
                        modalTitle="Sign Up"
                        modalText="Sign up now to STARdy with others."
                    />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <LoginModal
                        buttonText="Login"
                        buttonVariant="ghost"
                        modalTitle="Login"
                        modalText="We will automatically create a new account if it doesn't exist."
                    />
                </NavbarItem>

                <NavbarItem className="hidden lg:flex">
                    <ThemeSwitcher
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <ThemeSwitcher
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                {menuItems.map((item) => (
                    <NavbarMenuItem key={item.name} className="font-mono">
                        <Link
                            className="w-full"
                            color={
                                isActive(item.hrefs) ? "warning" : "foreground"
                            }
                            href={item.hrefs[0]}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
};

export default Navbar;
