import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, User } from 'lucide-react';

const Sobre = () => {
    const teamMembers = [
        { name: "Dr. Rian Nicolau", role: "Advogado e Sócio" },
        { name: "Dr. Júnior Nicolau", role: "Advogado e Sócio" },
        { name: "Dra. Rayoane Cavalcante Oliveira", role: "Advogada Previdenciária" },
        { name: "Dra. Ivana Carla Teixeira de S. Nicolau", role: "Advogada Previdenciária" },
        { name: "Dra. Francisca Fernanda Alves de Oliveira", role: "Advogada Previdenciária" },
    ];

    const highlights = [
        "15 anos de atuação jurídica",
        "Mais de 10.000 clientes atendidos",
        "Atendimento online em todo o Brasil",
        "Especialização em aposentadoria, pensão e revisão de benefícios",
        "Equipe multidisciplinar com foco em resultado"
    ];

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header / Hero Section */}
            <section className="bg-brand-navy py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-dark/90 z-0"></div>
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bebas text-white max-w-4xl mx-auto leading-tight mb-6">
                            "GERAR <span className="text-brand-gold">TRANQUILIDADE FINANCEIRA</span> PARA OS NOSSOS CLIENTES PARA QUE TENHAM TEMPO PARA SE DEDICAR AO QUE MAIS AMAM."
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto italic">
                            — Nossa Missão
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Institutional Content */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl border-l-4 border-brand-gold shadow-lg"
                        >
                            <h2 className="text-3xl font-bebas text-brand-navy mb-6">QUEM SOMOS</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                                Fundado com o propósito de oferecer atendimento jurídico humanizado e eficaz, o escritório Rian Nicolau Advocacia conta com uma equipe de 5 advogados especializados em Direito Previdenciário.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Além de profissionais administrativos e de apoio que garantem agilidade e excelência em cada atendimento. Não somos apenas advogados, somos parceiros na luta pelos seus direitos.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ul className="space-y-4">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <CheckCircle className="text-brand-gold shrink-0 mt-1" size={20} />
                                        <span className="text-brand-navy font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Team Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bebas text-brand-navy mb-4">NOSSA <span className="text-brand-gold">EQUIPE</span></h2>
                            <p className="text-gray-600 max-w-xl mx-auto">Advogados e colaboradores que lutam por você.</p>
                        </div>

                        {/* Full Team Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 h-[400px] md:h-[500px]"
                        >
                            <img
                                src="/nossa-equipe.jpg"
                                alt="Equipe Rian Nicolau Advocacia"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex items-end justify-center p-8">
                                <p className="text-white font-bebas text-2xl tracking-wide">RIAN NICOLAU ADVOCACIA</p>
                            </div>
                        </motion.div>

                        {/* Team Members List (Cards) */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-brand-gold/30 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                                        <User size={24} />
                                    </div>
                                    <h3 className="font-bold text-lg text-brand-navy">{member.name}</h3>
                                    <p className="text-gray-500 text-sm">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-gold py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bebas text-brand-navy mb-6">
                        QUER SABER SE TEM DIREITO À APOSENTADORIA OU REVISÃO?
                    </h2>
                    <p className="text-brand-navy/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                        Sabemos que lidar com o INSS pode ser difícil. Estamos aqui para facilitar esse caminho. Fale agora mesmo com um especialista.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5588988510834?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista."
                            target="_blank"
                            rel="noreferrer"
                            className="bg-brand-navy text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-brand-navy transition-all shadow-xl flex items-center justify-center gap-2"
                        >
                            FALAR COM ESPECIALISTA
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="/consultar-direitos"
                            className="bg-white/20 border-2 border-brand-navy text-brand-navy px-8 py-4 rounded font-bold text-lg hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center"
                        >
                            ANÁLISE GRATUITA
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sobre;
