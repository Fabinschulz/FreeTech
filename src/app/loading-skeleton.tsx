export default function LoadingSkeletonHome() {
    return (
        <section className="h-screen bg-[#081b29] text-white flex flex-col items-center justify-center px-10">
            <div className="animate-pulse">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center">
                    <span className="bg-gray-300 rounded-md w-72 md:w-[600px] h-12 md:h-16 inline-block dark:bg-gray-700"></span>
                </h1>
                <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
                    <span className="bg-gray-300 rounded-md w-80 md:w-[750px] h-8 inline-block dark:bg-gray-700"></span>
                </p>
                <div className="flex flex-col items-center justify-center">
                    <span className="px-28 py-6 bg-sky-500 rounded-full text-center mt-4"></span>
                </div>
            </div>
        </section>
    );
}
