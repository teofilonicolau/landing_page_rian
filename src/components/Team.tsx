import { motion } from 'framer-motion';

const Team = () => {
    return (
        <section id="team" className="py-20 bg-brand-navy relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-0 w-64 h-64 border-[40px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-gold font-bold tracking-wider text-sm">NOSSA EQUIPE</span>
                        <h2 className="text-4xl md:text-5xl font-bebas text-white mt-2">
                            QUEM LUTA POR <span className="text-brand-gold">VOCÊ</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-right md:text-left">
                        Uma equipe altamente qualificada, ética e comprometida com o seu resultado.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Partners - Dupla */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-xl h-[450px] md:col-span-1 border-b-4 border-brand-gold shadow-2xl"
                    >
                        <img
                            src="/dupla.jpg"
                            alt="Dr. Júnior Nicolau & Dr. Rian Nicolau"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bebas text-white">Dr. Júnior Nicolau & <br className="lg:hidden" /> Dr. Rian Nicolau</h3>
                            <p className="text-brand-gold uppercase tracking-wider text-sm font-bold mt-1">Sócios Fundadores</p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-xl h-[450px] md:col-span-2 bg-gradient-to-br from-brand-dark to-brand-navy border border-white/5 flex flex-col justify-center p-8 md:p-12 shadow-2xl"
                    >
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-widest mb-6">
                                NOSSA META
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bebas text-white mb-6 leading-tight">
                                DEFENDER TÉCNICA E ETICAMENTE OS <span className="text-brand-gold">DIREITOS SOCIAIS</span> DOS TRABALHADORES.
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Não se trata apenas de processos, mas de histórias de vida. Nosso compromisso é garantir que cada segurado receba o benefício justo que construiu ao longo de anos de trabalho.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
