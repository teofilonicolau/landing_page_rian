import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultarDireitos = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Dados enviados! Nossa equipe analisará e entrará em contato.");
    };

    return (
        <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-4 relative">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>

            <div className="w-full max-w-2xl z-10">
                <Link to="/" className="inline-flex items-center text-gray-400 hover:text-brand-gold mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Voltar para Home
                </Link>

                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bebas text-brand-navy mb-2">
                            ANÁLISE <span className="text-brand-gold">GRATUITA</span>
                        </h1>
                        <p className="text-gray-600">
                            Preencha os dados abaixo para que nossos especialistas avaliem o seu caso.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
                                <input type="text" className="w-full bg-gray-100 border-none rounded p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp</label>
                                <input type="tel" className="w-full bg-gray-100 border-none rounded p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold" placeholder="(00) 00000-0000" required />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Idade</label>
                                <input type="number" className="w-full bg-gray-100 border-none rounded p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Tempo de Contribuição (aprox.)</label>
                                <input type="text" className="w-full bg-gray-100 border-none rounded p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold" placeholder="Ex: 15 anos" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Tipo de Trabalho Principal</label>
                            <select className="w-full bg-gray-100 border-none rounded p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold">
                                <option value="">Selecione...</option>
                                <option value="urbano">Urbano (Carteira Assinada)</option>
                                <option value="rural">Rural / Agricultor</option>
                                <option value="autonomo">Autônomo / MEI</option>
                                <option value="servidor">Servidor Público</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Mensagem ou Dúvida Específica</label>
                            <textarea className="w-full bg-gray-100 border-none rounded p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold h-24"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-brand-navy text-white py-4 rounded font-bold text-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg hover:shadow-xl">
                            VERIFICAR MEUS DIREITOS AGORA
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            Seus dados estão seguros e serão usados apenas para esta análise.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConsultarDireitos;
