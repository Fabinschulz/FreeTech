export default function LoadingSkeleton() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center mx-4 py-24">
            <div className="animate-pulse">
                <div className="flex flex-col items-center justify-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                        <span className="bg-gray-300 rounded-md w-96 h-6 inline-block dark:bg-gray-700"></span>
                        <span className="bg-sky-300 rounded-md w-64 h-6 inline-block ml-2 dark:bg-gray-700"></span>
                    </h1>
                </div>
                <form className="w-full max-w-4xl">
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <div className="bg-gray-300 rounded-md w-24 h-4 mb-2"></div>
                            <div className="bg-gray-300 rounded-md w-full h-8"></div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="bg-gray-300 rounded-md w-24 h-4 mb-2"></div>
                            <div className="bg-gray-300 rounded-md w-full h-8"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <div className="bg-gray-300 rounded-md w-24 h-4 mb-2"></div>
                            <div className="bg-gray-300 rounded-md w-full h-8"></div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="bg-gray-300 rounded-md w-24 h-4 mb-2"></div>
                            <div className="bg-gray-300 rounded-md w-full h-8"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full px-3">
                            <div className="bg-gray-300 rounded-md w-24 h-4 mb-2"></div>
                            <div className="bg-gray-300 rounded-md w-full h-36"></div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
