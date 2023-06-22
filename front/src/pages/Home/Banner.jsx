import icon from '../../assets/images/icon.png'

export default () => {
    return (
        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl mt-24'>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                                Super Fast & Reliable Faster Network
                            </h1>
                            <p>
                                We provide an extensive range of high quality data & internet connectivity services throughout the country.
                            </p>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            <img src={icon} className="max-w-xl" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}