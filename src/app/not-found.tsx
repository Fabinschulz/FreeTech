import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

export default function NotFound() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-screen bg-gray-100 text-gray-700 text-center">
            <Image src="/404-error.png" alt="404" width={500} height={500} />
            <div className="flex flex-col justify-center items-center md:items-start space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">Página não encontrada</h1>
                <div className="text-lg  md:text-xl font-medium mx-4">
                    <span>
                        A <span className="text-sky-500">URL</span> digitada não foi encontrada
                        tente corrigir ou voltar.
                    </span>
                </div>
                <Link
                    className="rounded-md px-8 py-4 bg-sky-400 hover:bg-sky-600 text-[#081b29] text-lg transition duration-300 ease-in-out"
                    href="/"
                >
                    <FiChevronLeft className="inline-block mr-2" size={22} />
                    Voltar para o início
                </Link>
            </div>
        </div>
    );
}
