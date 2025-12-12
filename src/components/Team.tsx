import { motion } from 'framer-motion';

const Team = () => {
    // Placeholder images - in real implementation would use real photos
    const team = [
        {
            name: "Dr. Rian Nicolau",
            role: "Sócio Fundador",
            image: "/equipe.jpg"
        },
        // Add more team members here
    ];

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
                    {/* Main Lawyer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-xl h-[400px] md:col-span-1 border-b-4 border-brand-gold"
                    >
                        <img
                            src={team[0].image}
                            alt={team[0].name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-3xl font-bebas text-white">{team[0].name}</h3>
                            <p className="text-brand-gold uppercase tracking-wider text-sm">{team[0].role}</p>
                        </div>
                    </motion.div>

                    {/* Placeholder for other members or team photo */}
                    <div className="md:col-span-2 bg-brand-dark/50 rounded-xl border border-white/5 flex items-center justify-center p-8 text-center">
                        <div>
                            <h3 className="text-2xl font-bebas text-white mb-2">MAIS MEMBROS DA EQUIPE</h3>
                            <p className="text-gray-400">Nossa equipe conta com diversos especialistas prontos para te atender.</p>
                            {/* Can be replaced by a carousel of images later */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
