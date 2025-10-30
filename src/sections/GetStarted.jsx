const GetStarted = () => {
    return (
        <section className="bg-primary-dark ele-center relative">
            <div id="contact" className="absolute bg-[rgba(35,42,59,0.7)] text-white rounded-2xl shadow-lg w-[750px] max-w-full p-10 text-center border border-[#2f3a52]">
                <h2 className="text-3xl font-semibold mb-4 text-[#f9f871]">
                    Get Started for Free
                </h2>
                <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                    Start your journey with us today. Enter your email to create your free account and explore all the features we offer to help you grow your business.
                </p>
                <form className="flex flex-col sm:flex-row gap-2 justify-center sm-text-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-[65%] px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f9f871]"
                    />
                    <button
                        type="submit"
                        className="py-2 sm:w-[35%] bg-accent rounded-full shadow-md hover:bg-highlight transition-all duration-300"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </section>
    );
};

export default GetStarted;
