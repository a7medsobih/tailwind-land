import icon1 from '../assets/images/icon-access-anywhere.svg'
import icon2 from '../assets/images/icon-any-file.svg'
import icon3 from '../assets/images/icon-collaboration.svg'
import icon4 from '../assets/images/icon-security.svg'

const Feature = () => {
    const featureBoxs = [
        {
            icon: icon1,
            title: "Fast Performance",
            desc: "Optimized and lightweight components built to deliver blazing fast load times.",
        },
        {
            icon: icon2,
            title: "Clean Code",
            desc: "Write maintainable, scalable, and reusable code with Tailwind and React.",
        },
        {
            icon: icon3,
            title: "Responsive Design",
            desc: "Looks perfect on every screen size with responsive utilities built-in.",
        },
        {
            icon: icon4,
            title: "Customizable Themes",
            desc: "Easily adjust colors, fonts, and layouts to match your brand identity.",
        },
    ]
    return (
        <section id="features" className="padding-section bg-primary-dark">
            <div className="container px-10">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Powerful Features Built for You
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {featureBoxs.map((feature, index) => (
                        <div key={index}
                            className="ele-center flex-col text-center bg-primary rounded-2xl shadow-lg p-8 hover:-translate-y-1 transition duration-300"
                        >
                            <img
                                src={feature.icon}
                                alt="icon"
                                className="w-[80px] h-[80px] mb-5"
                            />
                            <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
                            <p className='text-gray-300  text-sm'>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature