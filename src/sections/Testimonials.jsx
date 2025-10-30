import mem1 from "../assets/images/04.jpg"
import mem2 from "../assets/images/memb02.jpg"
import mem3 from "../assets/images/memb05.jpg"
import quotes from "../assets/images/bg-quotes.png"

const testimonialsBoxs = [
    {
        reviwe:
            "TailwindLap helped us build a lightning-fast, modern website in record time. The design flexibility is incredible!",
        name: "Hamed Ali",
        img: mem1,
        jobTitle: "UI/UX Designer",
    },
    {
        reviwe:
            "Working with TailwindLap was smooth and professional. Our website performance improved dramatically.",
        name: "Sara Mohamed",
        img: mem2,
        jobTitle: "Frontend Developer",
    },
    {
        reviwe:
            "The templates are super clean and easy to customize. Highly recommend it for startups and agencies.",
        name: "Youssef Tarek",
        img: mem3,
        jobTitle: "Product Manager",
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="padding-section pb-60 bg-primary-dark">
            <div className="container px-5">
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    <img
                        src={quotes}
                        alt="quotes"
                        className="absolute z-[-1] top-[-30px] left-[-5px]"
                    />
                    {testimonialsBoxs.map((item, index) => (
                        <div
                            key={index}
                            className="bg-primary p-5 rounded-2xl shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-full sm:w-[45%] md:w-[30%]"
                        >
                            <p className="italic mb-6 text-slate-300">{`"${item.reviwe}"`}</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-[60px] h-[60px] rounded-full object-cover border-2 border-white"
                                />
                                <div>
                                    <h4 className="font-semibold text-lg">{item.name}</h4>
                                    <p className="text-sm text-slate-400">{item.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials