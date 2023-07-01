import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiDotnet, SiCsharp, SiStorybook } from 'react-icons/si';

const ServicesPage = () => {
    return (
        <section className="container mx-auto min-h-screen flex flex-col justify-center items-center py-32 px-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                Nossos <span className="text-sky-500">Serviços</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/soft.jpg"
                            alt="Softwares"
                            width={135}
                            height={50}
                            className="rounded-full border border-gray-300"
                        />
                        <h2 className="text-xl font-bold text-gray-700 mt-4">Softwares</h2>
                        <p className="text-gray-600 text-center mt-2">
                            Desenvolvimento de softwares sob medida para sua empresa.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/website.jpg"
                            alt="Websites"
                            width={135}
                            height={50}
                            className="rounded-full border border-gray-300"
                        />
                        <h2 className="text-xl font-bold text-gray-700 mt-4">Websites</h2>
                        <p className="text-gray-600 text-center mt-2">
                            Desenvolvimento de websites responsivos e modernos.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/aplicativos.jpg"
                            alt="Aplicativos"
                            width={135}
                            height={50}
                            className="rounded-full border border-gray-300"
                        />
                        <h2 className="text-xl font-bold text-gray-700 mt-4">Aplicativos</h2>
                        <p className="text-gray-600 text-center mt-2">
                            Desenvolvimento de aplicativos para Android e iOS.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/consultoria.jpg"
                            alt="Consultoria"
                            width={135}
                            height={50}
                            className="rounded-full border border-gray-300"
                        />
                        <h2 className="text-xl font-bold text-gray-700 mt-4">Consultoria</h2>
                        <p className="text-gray-600 text-center mt-2">
                            Consultoria em desenvolvimento de software e tecnologia.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/manutencao.jpg"
                            alt="manutencao"
                            width={135}
                            height={60}
                            className="rounded-full border border-gray-300"
                        />
                        <h2 className="text-xl font-bold text-gray-700 mt-4 text-center">
                            Manutenção e suporte técnico
                        </h2>
                        <p className="text-gray-600 text-center mt-2">
                            Manutenção e suporte técnico para sistemas e aplicativos.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/treinamento.jpg"
                            alt="Treinamento"
                            width={135}
                            height={50}
                            className="rounded-full border border-gray-300"
                        />
                        <h2 className="text-xl font-bold text-gray-700 mt-4">Treinamentos</h2>
                        <p className="text-gray-600 text-center mt-2">
                            Treinamentos em desenvolvimento de software e tecnologia.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                    Tecnologias <span className="text-sky-500">(Stack)</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-sky-700 rounded-lg">
                    <div className="drop-shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <FaReact size={50} className="text-sky-500" />
                            <h2 className="text-xl font-bold text-white mt-4">React</h2>
                        </div>
                    </div>
                    <div className="drop-shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <SiTypescript size={50} className="text-sky-600" />
                            <h2 className="text-xl font-bold text-white mt-4">Typescript</h2>
                        </div>
                    </div>
                    <div className="drop-shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <SiJavascript size={50} className="text-yellow-500" />
                            <h2 className="text-xl font-bold text-white mt-4">Javascript</h2>
                        </div>
                    </div>
                    <div className="drop-shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <SiCsharp size={50} className="text-purple-500" />
                            <h2 className="text-xl font-bold text-white mt-4">C#</h2>
                        </div>
                    </div>
                    <div className="drop-shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <SiDotnet size={50} className="text-purple-500" />
                            <h2 className="text-xl font-bold text-white mt-4">.NET</h2>
                        </div>
                    </div>
                    <div className="drop-shadow-lg p-5">
                        <div className="flex flex-col justify-center items-center">
                            <SiStorybook size={50} className="text-pink-500" />
                            <h2 className="text-xl font-bold text-white mt-4">Storybook</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
