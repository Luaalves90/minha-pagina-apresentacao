import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validação em tempo real
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'E-mail inválido' : '';
      case 'subject':
        return value.length < 5 ? 'Assunto deve ter pelo menos 5 caracteres' : '';
      case 'message':
        return value.length < 10 ? 'Mensagem deve ter pelo menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validação em tempo real
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todos os campos
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simular envio (aqui você pode integrar com EmailJS depois)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "E-mail",
      value: "lua.alves.reis@gmail.com",
      link: "mailto:lua.alves.reis@gmail.com",
      color: "#EA4335"
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/luaalves",
      link: "https://linkedin.com/in/luaalves",
      color: "#0A66C2"
    },
    {
      icon: FiMapPin,
      label: "Localização",
      value: "Rio de Janeiro, RJ",
      link: null,
      color: "#10B981"
    }
  ];

  const whatsappNumber = "5521982954471";
  const whatsappMessage = "Olá Luã! Vi seu portfólio e gostaria de conversar sobre...";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estou disponível para novos projetos, freelances ou oportunidades de trabalho. 
            Entre em contato!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">Envie uma Mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#252525] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <FiAlertCircle /> {errors.name}
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#252525] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <FiAlertCircle /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#252525] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder="Assunto da mensagem"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <FiAlertCircle /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 bg-[#252525] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder="Sua mensagem..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <FiAlertCircle /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Status de Envio */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-500"
                  >
                    <FiCheckCircle className="text-xl" />
                    <span>Mensagem enviada com sucesso! Em breve retornarei.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-500"
                  >
                    <FiAlertCircle className="text-xl" />
                    <span>Erro ao enviar mensagem. Tente novamente.</span>
                  </motion.div>
                )}

                {/* Botão Enviar */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Coluna Direita - Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Cards de Contato */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
              >
                {info.link ? (
                  <a 
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-[#252525] rounded-lg group-hover:scale-110 transition-transform">
                      <info.icon style={{ color: info.color }} className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#252525] rounded-lg">
                      <info.icon style={{ color: info.color }} className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-base font-medium text-gray-300">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Botão WhatsApp */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="block bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#25D366]/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-3xl text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                    (21) 98295-4471
                  </p>
                </div>
                <div className="text-[#25D366]">
                  <FiSend className="text-xl" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Clique para iniciar uma conversa no WhatsApp
              </p>
            </motion.a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;