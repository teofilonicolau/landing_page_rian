import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `*NOVA MENSAGEM DO SITE*\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Mensagem:* ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/5588988510834?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-brand-navy relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <span className="text-brand-gold font-bold tracking-wider text-sm">FALE CONOSCO</span>
                        <h2 className="text-4xl md:text-5xl font-bebas text-white mt-2 mb-8">
                            ENTRE EM <span className="text-brand-gold">CONTATO</span>
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-md">
                            Estamos prontos para ouvir sua história e lutar pelos seus direitos.
                            Atendemos em todo o Brasil.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bebas text-xl">ENDEREÇO</h4>
                                    <p className="text-gray-400">
                                        R. Uzias Soares Diniz, 277 - 01<br />
                                        Novo Centro, Icó – CE, CEP: 63430-000
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=R.+Uzias+Soares+Diniz,+277+-+01+-+Novo+Centro,+Icó+–+CE"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-brand-gold text-sm hover:underline mt-1 inline-block"
                                    >
                                        Ver no Google Maps
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bebas text-xl">TELEFONE / WHATSAPP</h4>
                                    <p className="text-gray-400">(88) 3561.2610</p>
                                    <p className="text-gray-400">(88) 98851.0834</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bebas text-xl">E-MAIL</h4>
                                    <p className="text-gray-400">riannicolau@hotmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bebas text-brand-navy mb-6">ENVIE UMA MENSAGEM</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 border-none rounded p-3 text-gray-800 focus:ring-2 focus:ring-brand-gold"
                                    placeholder="Seu nome"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 border-none rounded p-3 text-gray-800 focus:ring-2 focus:ring-brand-gold"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Telefone / WhatsApp</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 border-none rounded p-3 text-gray-800 focus:ring-2 focus:ring-brand-gold"
                                    placeholder="(00) 00000-0000"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Mensagem</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 border-none rounded p-3 text-gray-800 focus:ring-2 focus:ring-brand-gold h-32"
                                    placeholder="Como podemos ajudar?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-brand-navy text-white py-4 rounded font-bold text-lg hover:bg-brand-gold hover:text-brand-navy transition-colors flex justify-center items-center gap-2">
                                ENVIAR MENSAGEM
                                <Send size={18} />
                            </button>
                        </form>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="h-[1px] bg-gray-300 flex-1"></span>
                            <span className="text-gray-400 text-sm px-4">OU FALE DIRETAMENTE</span>
                            <span className="h-[1px] bg-gray-300 flex-1"></span>
                        </div>

                        <a
                            href="https://wa.me/5588988510834?text=Olá,%20gostaria%20de%20verificar%20meus%20direitos%20previdenciários."
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 w-full bg-[#25D366] text-white py-4 rounded font-bold text-lg hover:brightness-110 transition-all flex justify-center items-center gap-2"
                        >
                            <MessageCircle size={24} />
                            WHATSAPP IMEDIATO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
