import { motion } from 'framer-motion';
import { Briefcase, HeartPulse, Scale, Clock, Users, FileSearch } from 'lucide-react';

const services = [
    {
        icon: <Clock size={32} />,
        title: "Aposentadorias",
        desc: "Análise completa para aposentadoria por idade, tempo de contribuição e regras de transição."
    },
    {
        icon: <HeartPulse size={32} />,
        title: "Auxílio Doença e BPC",
        desc: "Benefícios para quem está incapacitado de trabalhar ou idosos/deficientes de baixa renda."
    },
    {
        icon: <Users size={32} />,
        title: "Pensão Por Morte",
        desc: "Garantia de amparo financeiro para os dependentes do segurado falecido."
    },
    {
        icon: <FileSearch size={32} />,
        title: "Revisão de Benefícios",
        desc: "Muitos benefícios são concedidos com valor menor. Verificamos se você tem direito a receber mais."
    },
    {
        icon: <Scale size={32} />,
        title: "Planejamento Previdenciário",
        desc: "Estratégia para garantir a melhor aposentadoria possível no futuro."
    },
    {
        icon: <Briefcase size={32} />,
        title: "Benefícios Rurais",
        desc: "Atuação especializada na defesa dos direitos do trabalhador rural."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-brand-dark relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider text-sm">ÁREAS DE ATUAÇÃO</span>
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mt-2">
                        COMO PODEMOS TE <span className="text-brand-gold">AJUDAR</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-navy border border-white/5 p-8 rounded-xl hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bebas text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
