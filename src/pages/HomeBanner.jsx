import React from 'react';

const HomeBanner = () => {
    return (
        <section className="bg-[#0A152F] text-white relative">
            {/* Top Curved Shape - Header ku keela */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-12 md:h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C600,120 600,120 1200,0 L1200,0 L0,0 Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10  ">
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h- ">

                    {/* Left Content */}
                    <div className="space-y-6 py-5">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Empowering Ideas<br />
                            with Technological<br />
                            Excellence
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                            In today's competitive business, the demand for efficient and cost-effective IT
                            solutions has never been more critical.
                        </p>

                        <div className="pt-4">
                            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-md shadow-lg transition-all duration-300">
                                Explore More
                            </button>
                        </div>


                    </div>

                    {/* Right Image */}
                    <div className="relative hidden lg:block">
                        <img
                            src="https://zotech-react-snowy.vercel.app/assets/img/hero/hero-1.png"
                            alt="Professional with laptop"
                            className="max-w-[85%]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;