import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dermacare - Clínica Dermatológica",
      description: "Site institucional completo com sistema de agendamento online em tempo real, chatbot interativo para triagem, teste educativo de tipo de pele e galeria de antes/depois. Foco em conversão e experiência do usuário.",
      image: "/minha-pagina-apresentacao/images/dermacare.png", // CORRIGIDO: caminho e extensão
      technologies: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" }
      ],
      liveLink: "https://luaalves90.github.io/dermacare-clinica/",
      repoLink: "https://github.com/Luaalves90/dermacare-clinica",
      highlights: ["Agendamento online", "Chatbot triagem", "Teste de pele"]
    },
    {
      id: 2,
      title: "Silva & Ferino Advogados",
      description: "Site institucional para escritório de advocacia especializado em direito médico. Navegação completa, seções institucionais, depoimentos, formulário de contato funcional e botões de ação para WhatsApp.",
      image: "/minha-pagina-apresentacao/images/silva-ferino.png", // CORRIGIDO: caminho e extensão
      technologies: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" }
      ],
      liveLink: "https://luaalves90.github.io/silva-ferino-advogados/",
      repoLink: "https://github.com/Luaalves90/silva-ferino-advogados",
      highlights: ["Design profissional", "Formulário contato", "WhatsApp integrado"]
    },
    {
      id: 3,
      title: "Dashboard de Atendimentos",
      description: "Dashboard interativo desenvolvido com React para visualização de dados de atendimentos. Exibe métricas em tempo real, gráficos comparativos, análise de tendências e distribuição de clientes (novos vs. recorrentes).",
      image: "/minha-pagina-apresentacao/images/dashboard.png", // CORRIGIDO: caminho e extensão
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Chart.js", icon: FaChartLine, color: "#FF6384" }
      ],
      liveLink: "https://luaalves90.github.io/dashboard-atendimentos-react/",
      repoLink: "https://github.com/Luaalves90/dashboard-atendimentos-react",
      highlights: ["Métricas em tempo real", "Gráficos dinâmicos", "Análise de dados"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Função para lidar com erro de imagem
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/800x400?text=Projeto+Indisponível';
  };

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
            Projetos em <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Destaque</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos meus principais projetos, desenvolvidos com foco em performance, 
            usabilidade e experiência do usuário.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
            >
              {/* Imagem do Projeto */}
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-48 overflow-hidden bg-[#252525]"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={handleImageError}
                  loading="lazy" // Adicionado lazy loading para performance
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 bg-[#252525] rounded-md text-xs"
                    >
                      <tech.icon style={{ color: tech.color }} className="text-sm" />
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium text-white hover:shadow-lg hover:shadow-blue-600/25 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />
                    Ver projeto
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#252525] rounded-lg text-sm font-medium text-gray-300 hover:bg-[#303030] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub />
                    Código
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-xl pointer-events-none transition-all" />
            </motion.div>
          ))}
        </motion.div>

        {/* Ver Mais no GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Luaalves90"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="text-xl" />
            Ver mais no GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;