import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTrendingUp, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaReact, FaChartBar, FaHandshake } from 'react-icons/fa';

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const highlights = [
    {
      icon: FaReact,
      title: "Front-End",
      description: "React, JavaScript, TypeScript, Tailwind",
      color: "#61DAFB"
    },
    {
      icon: FaChartBar,
      title: "Dados & Analytics",
      description: "Power BI, SQL, Análise de Dados, KPIs",
      color: "#F2C811"
    },
    {
      icon: FaHandshake,
      title: "Vendas Consultivas",
      description: "10+ anos em B2B, CRM, Estratégia de Negócios",
      color: "#10B981"
    }
  ];

  const experiences = [
    {
      period: "out/2024 - atual",
      title: "Desenvolvedor Front-End Freelance",
      company: "Projetos Autorais",
      description: "Desenvolvimento de sites institucionais responsivos com React, JavaScript e Tailwind. Implementação de componentes interativos, consumo de APIs REST e deploy no GitHub Pages."
    },
    {
      period: "out/2024 - out/2025",
      title: "Analista de Dados Júnior",
      company: "Bradesco Seguros",
      description: "Elaboração de dashboards interativos no Power BI, consultas SQL para extração e análise de dados, validação de informações e suporte à tomada de decisão baseada em métricas."
    },
    {
      period: "2014 - 2024",
      title: "Consultor de Vendas B2B",
      company: "Múltiplas Empresas",
      description: "10+ anos em vendas consultivas, gestão de CRM, prospecção estratégica, análise de dados comerciais e relacionamento com clientes corporativos."
    }
  ];

  const certifications = [
    "Programador Front-End com IA - Senac RJ (2026)",
    "Capacitação em Pré-Vendas - RD University (2025)",
    "Sales Engagement para SDRs - Meetime (2025)",
    "Power BI - Santander Open Academy (2024)",
    "Certificação HTML, CSS e Programação - DevMedia (2024)"
  ];

  return (
    <section className="py-20 bg-[#111]">
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
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda - História */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-white"
            >
              Desenvolvedor Front-End com visão de negócio
            </motion.h3>

            <motion.p 
              variants={itemVariants}
              className="text-gray-400 mb-6 leading-relaxed"
            >
              Atuo com React, JavaScript e Tailwind na construção de interfaces modernas, 
              performáticas e orientadas à experiência do usuário. Minha experiência anterior 
              como Analista de Dados no Bradesco me permite desenvolver soluções com base em 
              métricas, indicadores e impacto real no negócio.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              São 10+ anos em vendas consultivas B2B que me deram uma compreensão única 
              de como a tecnologia pode resolver problemas reais de negócio. Hoje, uno 
              essa visão estratégica com desenvolvimento front-end para entregar 
              aplicações que não apenas funcionam — mas geram resultado.
            </motion.p>

            {/* Cards de Destaque */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {highlights.map((item, index) => (
                <div key={index} className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-800">
                  <item.icon style={{ color: item.color }} className="text-2xl mb-2" />
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Informações Rápidas */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FiMapPin className="text-blue-400" />
                <span>Rio de Janeiro, RJ</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="text-blue-400" />
                <span>35 anos</span>
              </div>
              <div className="flex items-center gap-2">
                <FiAward className="text-blue-400" />
                <span>ADS (cursando)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Direita - Trajetória */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Lista de Experiências */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <FiTrendingUp className="text-blue-400" />
                Trajetória Profissional
              </h3>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-xs text-blue-400 font-medium">{exp.period}</span>
                    <h4 className="text-base font-semibold text-white mt-1">{exp.title}</h4>
                    <p className="text-xs text-gray-500 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificações */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <FiAward className="text-blue-400" />
                Certificações
              </h3>
              
              <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✔</span>
                      <span className="text-sm text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;