const AboutUsPage = () => {
    return (
        <section className="container mx-auto min-h-screen flex flex-col justify-center items-center space-y-5 py-24">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
                Quem <span className="text-sky-500">somos</span>
            </h1>
            <div className="rounded-full h-64 w-64 bg-[#081b29] flex items-center justify-center border-[3px] border-sky-500 -z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg text-blue-500">
                    Free Tech
                </h2>
            </div>
            <p className="text-white text-xl text-center font-semibold mx-4">
                A Free Tech é uma empresa inovadora e dinâmica, dedicada a fornecer soluções
                tecnológicas de ponta para atender às demandas do mercado atual. Com uma visão
                voltada para o futuro, a empresa busca estar na vanguarda da tecnologia, oferecendo
                serviços e produtos de alta qualidade.
            </p>
            <p className="text-white text-xl text-center font-semibold mx-4">
                Nosso principal objetivo é simplificar a vida das pessoas por meio da tecnologia.
                Buscamos constantemente soluções criativas e inteligentes que melhorem a eficiência,
                a produtividade e a experiência do usuário. Além do desenvolvimento de software,
                oferecemos serviços de consultoria em tecnologia, ajudando as empresas a identificar
                oportunidades de crescimento, otimizar seus processos e implementar as melhores
                práticas do setor.
            </p>
            <p className="text-white text-xl text-center font-semibold mx-4">
                Acreditamos no valor da parceria e no relacionamento próximo com nossos clientes.
                Trabalhamos em colaboração para entender suas necessidades específicas e fornecer
                soluções adaptadas que impulsionem seu crescimento e sucesso. A satisfação do
                cliente está no centro de tudo o que fazemos, e nos orgulhamos de oferecer um
                atendimento excepcional e suporte contínuo. Estamos empolgados em moldar o futuro da
                tecnologia e sermos agentes de mudança. Se você está procurando soluções
                tecnológicas inovadoras e confiáveis, junte-se a nós nessa jornada e descubra o
                poder da tecnologia livre para impulsionar o seu sucesso.
            </p>
        </section>
    );
};

export default AboutUsPage;
