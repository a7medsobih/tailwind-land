import { useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg";
const links = ["Features", "Team", "Sign In"];

const Header = () => {
    const navRef = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navRef.current.classList.add("bg-primary-dark", "pt-[20px]");
                navRef.current.classList.remove("bg-transparent", "pt-[50px]");
            } else {
                navRef.current.classList.add("bg-transparent", "pt-[50px]");
                navRef.current.classList.remove("bg-primary-dark", "pt-[20px]");
            }
        })
    }, []);

    return (
        <nav
            ref={navRef}
            className="pt-[50px] fixed z-20 top-0 left-0 right-0 w-full p-5 transition-all duration-300"
        >
            <div className="container flex justify-between items-center">
                <a href="#" className="logo flex items-center">
                    <img src={logo}
                        alt="logo-imge"
                        className="w-[100px] md:w-[150px] object-contain"
                    />
                </a>

                <ul className="nav-links flex gap-6 sm:gap-10">
                    {links.map((link) => (
                        <li key={link} >
                            <a href={`/${link.toLowerCase()}`}
                                className="text-sm sm:text-base opacity-[0.7] transition-all duration-300 hover:opacity-[1] hover:underline">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header