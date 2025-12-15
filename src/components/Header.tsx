import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', type: 'scroll', to: 'home' },
        { name: 'Sobre', type: 'route', to: '/sobre' },
        { name: 'FAQ', type: 'scroll', to: 'faq' },
    ];

    const externalLinks = [
        { name: 'Blog', href: 'https://www.riannicolauadv.adv.br/rnadvocaciablogprevidenciario/' }
    ];

    const renderNavLink = (link: any, mobile = false) => {
        const baseClasses = "text-gray-200 hover:text-brand-gold cursor-pointer transition-colors font-medium";
        const desktopClasses = "text-sm tracking-wide";
        const mobileClasses = "py-2 block";
        const classes = `${baseClasses} ${mobile ? mobileClasses : desktopClasses}`;

        if (link.type === 'route') {
            return (
                <Link
                    key={link.name}
                    to={link.to}
                    className={classes}
                    onClick={() => setIsOpen(false)}
                >
                    {link.name.toUpperCase()}
                </Link>
            );
        }

        if (!isHome) {
            return (
                <Link
                    key={link.name}
                    to="/"
                    className={classes}
                    onClick={() => setIsOpen(false)}
                >
                    {link.name.toUpperCase()}
                </Link>
            );
        }

        return (
            <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                className={classes}
                onClick={() => setIsOpen(false)}
            >
                {link.name.toUpperCase()}
            </ScrollLink>
        );
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Rian Nicolau Advocacia" className="h-16 md:h-20 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => renderNavLink(link))}
                    {externalLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-200 hover:text-brand-gold cursor-pointer transition-colors font-medium text-sm tracking-wide"
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}

                    <a
                        href="https://wa.me/5588988510834?text=Olá,%20gostaria%20de%20verificar%20meus%20direitos%20previdenciários."
                        target="_blank"
                        rel="noreferrer"
                        className="bg-brand-gold text-brand-navy px-6 py-2 rounded font-bold hover:bg-white hover:text-brand-navy transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                        FALE CONOSCO
                        <MessageCircle size={18} />
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => renderNavLink(link, true))}
                    {externalLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-200 hover:text-brand-gold py-2 block font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5588988510834?text=Olá,%20gostaria%20de%20verificar%20meus%20direitos%20previdenciários."
                        target="_blank"
                        rel="noreferrer"
                        className="bg-brand-gold text-brand-navy px-6 py-3 rounded font-bold text-center mt-2 flex justify-center items-center gap-2"
                    >
                        FALE CONOSCO
                        <MessageCircle size={18} />
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
