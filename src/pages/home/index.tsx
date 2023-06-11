import Link from 'next/link';
import { motion } from 'framer-motion-3d';

const Hero = () => {
    return (
        <section className="h-screen bg-[#081b29] text-white flex flex-col items-center justify-center px-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center">
                Bem vindo a FreeTech
            </h1>
            <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
                A FreeTech é uma empresa de tecnologia que oferece soluções inovadoras para o seu
                negócio.
            </p>
            <Link
                href="/contato"
                className="mt-8 px-8 py-4 bg-sky-500  text-[#081b29] rounded-full text-xl sm:text-2xl hover:bg-sky-600 transition duration-300 ease-in-out"
            >
                Entre em contato
            </Link>
        </section>
    );
};

export default Hero;
