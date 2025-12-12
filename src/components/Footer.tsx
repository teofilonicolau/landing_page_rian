import { Facebook, Instagram, Youtube, Video } from 'lucide-react';

const Footer = () => {
    // Custom TikTok Icon or use Video icon as placeholder
    return (
        <footer className="bg-brand-dark py-12 border-t border-white/5 text-center md:text-left">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                            <span className="text-3xl font-bebas text-white">RN</span>
                            <div className="h-8 w-[1px] bg-brand-gold"></div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bebas text-xl tracking-wider text-brand-gold">RIAN NICOLAU</span>
                                <span className="text-[10px] tracking-[0.2em] text-gray-400">ADVOCACIA</span>
                            </div>
                        </div>
                        <p className="text-gray-500 max-w-xs mx-auto md:mx-0">
                            Defendendo seus direitos previdenciários com ética, competência e resultado.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bebas text-xl mb-4">MAPA DO SITE</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-brand-gold transition-colors">Áreas de Atuação</a></li>
                            <li><a href="#team" className="hover:text-brand-gold transition-colors">Sobre</a></li>
                            <li><a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a></li>
                            <li><a href="/consultar-direitos" className="hover:text-brand-gold transition-colors">Consultar Direitos</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bebas text-xl mb-4">REDES SOCIAIS</h4>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="https://www.instagram.com/riannicolauadv/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/riannicolauadv/?locale=pt_BR" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="https://youtube.com/@codigofontetv" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Youtube size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@riannicolauadv" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Video size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Rian Nicolau Advocacia. Todos os direitos reservados.</p>
                    <p>Desenvolvido por <span className="text-brand-gold">Tamar AIta </span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
