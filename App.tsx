import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Stethoscope, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  Menu, 
  X,
} from 'lucide-react';
import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    name: "Guantes de Nitrilo Premium",
    desc: "Protección superior con sensibilidad táctil. Libres de polvo y látex.",
    category: "Protección Manual",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Mascarillas N95 Certificadas",
    desc: "Filtración de partículas del 95%. Ajuste ergonómico y respirabilidad.",
    category: "Protección Respiratoria",
    image: "https://images.unsplash.com/photo-1584036561566-b937500eb070?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Batas Quirúrgicas Estériles",
    desc: "Tejido SMS reforzado, repelente a fluidos y barrera bacteriana.",
    category: "Indumentaria",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Kits de Diagnóstico Rápido",
    desc: "Precisión clínica para entornos hospitalarios de alta demanda.",
    category: "Diagnóstico",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Gel Antiséptico Grado Hospitalario",
    desc: "Eliminación del 99.9% de gérmenes con fórmula hidratante.",
    category: "Desinfección",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6fac257d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Suministros de Sutura",
    desc: "Materiales de alta resistencia y precisión para procedimientos delicados.",
    category: "Quirúrgico",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('inicio')}>
              <div className="bg-blue-700 p-2 rounded-lg group-hover:bg-blue-800 transition-colors">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">BioMed<span className="text-blue-700">Global</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('inicio')} className="text-slate-600 hover:text-blue-700 transition-colors font-medium text-sm lg:text-base">Inicio</button>
              <button onClick={() => scrollToSection('nosotros')} className="text-slate-600 hover:text-blue-700 transition-colors font-medium text-sm lg:text-base">Nosotros</button>
              <button onClick={() => scrollToSection('catalogo')} className="text-slate-600 hover:text-blue-700 transition-colors font-medium text-sm lg:text-base">Catálogo</button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-blue-700/20 transform hover:-translate-y-0.5"
              >
                Contáctanos
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl animate-in slide-in-from-top-5">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-3 py-4 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Inicio</button>
              <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left px-3 py-4 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Nosotros</button>
              <button onClick={() => scrollToSection('catalogo')} className="block w-full text-left px-3 py-4 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Catálogo</button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-4 text-blue-700 font-bold bg-blue-50 rounded-lg mt-2">Contáctanos</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 -z-10"></div>
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold tracking-wide mb-6 animate-in fade-in zoom-in duration-500">
            LÍDERES EN SUMINISTROS MÉDICOS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Innovación y Seguridad <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">
              Para el Sector Salud
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
            Proveemos equipamiento médico de alta gama con estándares internacionales. 
            Comprometidos con la protección y eficiencia de su personal sanitario.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('catalogo')}
              className="group bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-blue-700/20 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Ver Catálogo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center hover:shadow-lg"
            >
              Contactar Asesor
            </button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="nosotros" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-emerald-100 rounded-3xl transform -rotate-2"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 sm:p-10 text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Stethoscope className="h-64 w-64" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excelencia Operativa</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Desde nuestra fundación, BioMed Global se ha dedicado a cerrar la brecha entre la innovación tecnológica y la práctica médica diaria. No solo vendemos productos; garantizamos seguridad.
                </p>
                <ul className="space-y-4">
                  {[
                    "Certificación ISO 9001",
                    "Logística de cadena de frío",
                    "Stock permanente garantizado",
                    "Asesoría técnica especializada"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-1 rounded-full">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Más que proveedores, somos aliados estratégicos.</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Entendemos que en el sector salud, la calidad no es negociable. Por eso, BioMed Global trabaja exclusivamente con fabricantes de primer nivel para asegurar que cada guante, cada mascarilla y cada instrumento cumpla con las normativas más exigentes.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8 border-t border-slate-100 pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-blue-700 mb-2">+500</h4>
                  <p className="text-slate-500 font-medium">Clínicas Atendidas</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-emerald-500 mb-2">100%</h4>
                  <p className="text-slate-500 font-medium">Garantía de Calidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase">Nuestra Oferta</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Catálogo Especializado</h2>
            <p className="text-slate-600 text-lg">
              Soluciones integrales diseñadas para maximizar la seguridad del paciente y la eficiencia del personal médico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/40 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                    {product.desc}
                  </p>
                  <button className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-slate-100 mt-auto">
                    Ver especificaciones <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 shadow-sm text-base font-semibold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors hover:shadow-md">
              Descargar Catálogo Completo (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 text-white bg-blue-900 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                <h2 className="text-3xl font-bold mb-6">Hablemos de sus necesidades</h2>
                <p className="text-blue-100 mb-12 text-lg leading-relaxed">
                  Solicite una cotización formal o agende una visita con uno de nuestros representantes comerciales.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-3 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                      <Mail className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Correo Electrónico</h4>
                      <p className="text-blue-200">contacto@biomedglobal.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-3 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                      <Phone className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Línea de Atención</h4>
                      <p className="text-blue-200">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-3 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                      <MapPin className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Oficina Principal</h4>
                      <p className="text-blue-200">Centro Empresarial HealthTech, Piso 4</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-16 bg-white">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre Completo</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="Dr. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Correo Corporativo</label>
                    <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="juan@clinica.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Institución o Clínica</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="Hospital General" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje o Requerimiento</label>
                    <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none" placeholder="Estoy interesado en cotizar..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 transform hover:-translate-y-0.5">
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">BioMed<span className="text-blue-700">Global</span></span>
          </div>
          <p className="text-sm">
            © 2024 BioMed Global S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;