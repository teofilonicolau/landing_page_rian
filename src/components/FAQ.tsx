import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Quem pode se aposentar pelo INSS?",
        answer: "Qualquer trabalhador que contribuiu regularmente, seja urbano, rural, autônomo ou MEI. É necessário cumprir requisitos de idade e/ou tempo de contribuição."
    },
    {
        question: "Como saber se tenho direito à aposentadoria?",
        answer: "Fazemos uma análise gratuita do seu histórico de contribuições e idade. Entramos em detalhes no seu CNIS e carteira de trabalho para verificar o melhor cenário."
    },
    {
        question: "Posso pedir revisão do meu benefício?",
        answer: "Sim. Muitos benefícios são calculados de forma errada. Se você acha que o valor está baixo, podemos revisar e buscar valores retroativos."
    },
    {
        question: "Atendem apenas em Icó–CE?",
        answer: "Não. Nosso atendimento é 100% online e disponível para todo o Brasil. Utilizamos ferramentas digitais para garantir sua comodidade."
    },
    {
        question: "Quanto custa a consulta inicial?",
        answer: "A primeira análise é gratuita e sem compromisso. Você só paga honorários se fecharmos contrato para buscar seu direito."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider text-sm">DÚVIDAS FREQUENTES</span>
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mt-2">
                        PERGUNTAS <span className="text-brand-gold">FREQUENTES</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-brand-navy border border-white/5 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-xl font-bebas text-white tracking-wide">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-brand-gold flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
