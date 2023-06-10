import { FunctionComponent } from 'react';
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer: FunctionComponent<any> = () => {
    return (
        <footer className="bg-[#081b29]">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/fabinschulz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[#00abf0] p-2 hover:scale-125 transition duration-300 ease-in-out"
                        >
                            <FaInstagram size={24} color="#00abf0" />
                        </a>

                        <a
                            href="https://api.whatsapp.com/send?phone=5511943685632"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[#00abf0] p-2 hover:scale-125 transition duration-300 ease-in-out"
                        >
                            <FaWhatsapp size={24} color="#00abf0" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fabiojr7/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[#00abf0] p-2 hover:scale-125 transition duration-300 ease-in-out"
                        >
                            <FaLinkedinIn size={24} color="#00abf0" />
                        </a>
                    </div>
                    <p className="mt-6 sm:mt-0 text-sm sm:text-base text-white">
                        &copy; 2021 FreeTech. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
