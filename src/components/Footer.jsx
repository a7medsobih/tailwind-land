import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../assets/images/logo.svg"; // adjust the path if needed
import myLogo from "../assets/images/logo.png"; // adjust the path if needed

const sections = [
    { link: "#hero", section: "Home" },
    { link: "#features", section: "Features" },
    { link: "#services", section: "Services" },
    { link: "#testimonials", section: "Testimonials" },
    { link: "#contact", section: "Contact" },
]

const Footer = () => {
    return (
        <footer className="bg-primary-darker pb-5 pt-48 ">
            <div className="container px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent pb-5  ">

                    {/* Logo & Description */}
                    <div className="text-center md:text-left">
                        <a href="/" className="">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-[120px] mb-4 mx-auto md:mx-0 transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                        <p className="text-slate-300 leading-relaxed hover:text-slate-100 transition-colors duration-300">
                            Our mission is to deliver a professional and seamless digital experience
                            that combines modern design with high performance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-3 text-lg ">Sections</h3>
                        <ul className="space-y-2 text-slate-300">
                            {sections.map((ele, i) => (
                                <li key={i}>
                                    <a
                                        href={ele.link}
                                        className="hover:text-highlight transition-all duration-300 hover:translate-x-2 inline-block"
                                    >
                                        {ele.section}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="text-center ">
                        <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
                        <div className="flex justify-center text-slate-300   gap-4 text-xl">
                            <a href="#" className="hover:text-highlight transition-transform duration-300 hover:scale-125"><FaFacebookF /></a>
                            <a href="#" className="hover:text-highlight transition-transform duration-300 hover:scale-125"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/ahmedsobih/" target="_blank" className="hover:text-highlight transition-transform duration-300 hover:scale-125"><FaLinkedinIn /></a>
                            <a href="https://github.com/a7medsobih" target="_blank" className="hover:text-highlight transition-transform duration-300 hover:scale-125"><FaGithub /></a>
                        </div>
                    </div>

                </div>


                {/* Copyright */}
                <div className="pt-6 text-center text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
                    <span className="flex justify-center items-center gap-2 mt-2">
                        Designed by
                        <a href="https://github.com/a7medsobih" target="_blank" className="inline-flex items-center">
                            <img
                                src={myLogo}
                                alt="Ahmed Sobih"
                                className="h-[25px] w-auto ml-1 transition-transform duration-300 hover:scale-125 hover:opacity-80"
                            />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
