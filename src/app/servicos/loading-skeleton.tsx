export default function LoadingSkeletonService() {
    return (
        <section className="container mx-auto min-h-screen flex flex-col justify-center items-center py-32 px-10">
            <div className="animate-pulse">
                <h1 className="text-white mb-8 text-center">
                    <span className="bg-gray-300 rounded-md w-96 h-8 inline-block dark:bg-gray-700"></span>
                    <span className="bg-sky-300 rounded-md w-64 h-8 inline-block ml-2 dark:bg-gray-700"></span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <span className="p-10 bg-sky-500 rounded-full text-center mt-4"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <span className="p-10 bg-sky-500 rounded-full text-center mt-4"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <span className="p-10 bg-sky-500 rounded-full text-center mt-4"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <span className="p-10 bg-sky-500 rounded-full text-center mt-4"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <span className="p-10 bg-sky-500 rounded-full text-center mt-4"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <span className="p-10 bg-sky-500 rounded-full text-center mt-4"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                            <span className="bg-gray-300 rounded-md w-96 h-6 inline-block mt-4 dark:bg-gray-700"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
