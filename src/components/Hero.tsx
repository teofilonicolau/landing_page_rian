import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradient/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-dark z-0" />

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 skew-x-12 translate-x-20 z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl z-0" />

            <div className="container mx-auto px-4 z-10 relative grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-semibold mb-6">
                        <CheckCircle size={14} />
                        <span>ESPECIALISTA EM PREVIDÊNCIA</span>
                    </div>

                    <h1 className="font-bebas text-5xl md:text-7xl leading-[0.9] text-white mb-6">
                        13 ANOS AJUDANDO <br />
                        <span className="text-brand-gold">TRABALHADORES</span> DO BRASIL
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                        Garanta seus direitos no INSS com segurança e agilidade. Nossa equipe está pronta para analisar seu caso e buscar o melhor benefício para você.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/5588988510834?text=Olá,%20gostaria%20de%20verificar%20meus%20direitos%20previdenciários."
                            target="_blank"
                            rel="noreferrer"
                            className="bg-brand-gold text-brand-navy px-8 py-4 rounded font-bold text-lg hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/20"
                        >
                            CONVERSE COM UM ESPECIALISTA
                            <ArrowRight size={20} />
                        </a>

                        <a
                            href="/consultar-direitos"
                            className="border border-white/30 text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                        >
                            CONSULTAR MEUS DIREITOS
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Placeholder for lawyer image - using a stylized card or the provided image if suitable */}
                    <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl">
                        <img
                            src="/logo-full.jpg"
                            alt="Rian Nicolau Advocacia"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex items-end p-8">
                            <div>
                                <p className="text-brand-gold font-bebas text-2xl">RIAN NICOLAU</p>
                                <p className="text-white text-sm">OAB/CE 2.057</p>
                            </div>
                        </div>
                    </div>

                    {/* Decor elements behind image */}
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-gold/20 rounded-2xl -z-10 bg-brand-navy/50"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
