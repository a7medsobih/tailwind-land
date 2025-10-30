import imgSection from "../assets/images/illustration-stay-productive.png"
import arrow from "../assets/images/icon-arrow.svg"

const StayProductive = () => {
    return (
        <section id="services" className="bg-primary-dark padding-section">
            <div className="container px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="ele-center">
                        <img
                            src={imgSection}
                            alt="Stay productive illustration"
                            className="w-full max-w-[500px] h-auto"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-6 leading-snug">
                            Stay productive
                            <br />
                            wherever you are
                        </h3>
                        <div className="text-gray-300 ">
                            <p>
                                Never let location be an issue when accessing your files. Our platform keeps your
                                data secure and accessible anywhere, anytime.
                            </p>
                            <p>
                                Collaborate seamlessly with your team and boost your productivity with our modern,
                                reliable tools.
                            </p>
                            <a href="#" className="w-fit pt-3 pb-1 font-semibold  text-accent hover:text-sky border-b border-transparent hover:border-slate-400  flex gap-3 transition-all duration-300 ">


                                See how it works
                                <img src={arrow}
                                    alt="arrow"
                                    className="w-[25px] h-[25px] object-contain animate-moveRight"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StayProductive