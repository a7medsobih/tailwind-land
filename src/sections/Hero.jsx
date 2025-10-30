import heroImg from '../assets/images/illustration-intro.png'
import curvy from "../assets/images/bg-curvy-desktop.svg";

const Hero = () => {
    return (
        <section id="hero" className='pt-20 bg-primary relative'>
            <div className='container px-2'>
                <div className='ele-center flex-col py-16 '>
                    <div className='w-[400px] max-w-full mb-10'>
                        <img
                            src={heroImg}
                            alt="hero-img"
                            className='w-full h-fit'
                        />
                    </div>
                    <div className='text-center md:max-w-[700px] max-w-full relative z-10'>
                        <h1 className='text-3xl md:text-4xl font-extrabold mb-6'>Build Modern Interfaces Faster with <span className="text-highlight">Tailwind Lab</span>
                        </h1>
                        <p className='px-5 md:px-20 text-sm md:text-base  text-gray-300'>
                            Discover tools, tutorials, and ready-made components to help you create beautiful, responsive websites using Tailwind CSS.
                            Simplify your workflow and bring your designs to life with clean and scalable code.
                        </p>
                        <button
                            className='mt-8 py-2 px-16 bg-accent text-white  rounded-full shadow-md hover:bg-highlight transition-all duration-300'
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-[200px] absolute z-0 bottom-0">
                <img
                    src={curvy}
                    alt="curvy"
                    className="w-full h-full"
                />
            </div>
        </section>
    )
}

export default Hero