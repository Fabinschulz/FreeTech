import { FunctionComponent } from 'react';

const Footer: FunctionComponent<any> = () => {
    return (
        <footer className="bg-[#081b29]">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <p className="mt-8 text-center text-base text-white">
                    &copy; 2021 FreeTech. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
