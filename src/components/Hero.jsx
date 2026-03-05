import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPowerOff } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const Hero = ({ scrollToSection, sections }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const techIcons = [
    { Icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
    { Icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
    { Icon: FaJs, color: '#F7DF1E', name: 'JavaScript' },
    { Icon: FaReact, color: '#61DAFB', name: 'React' },
    { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
    { Icon: FaGitAlt, color: '#F05032', name: 'Git' },
    { Icon: FaPowerOff, color: '#F2C811', name: 'Power BI' },
    { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background simples */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 min-h-[calc(100vh-80px)]"
        >
          {/* Coluna Esquerda - Texto */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-600/10 rounded-full text-sm text-blue-400 border border-blue-500/20">
                ⚡ React • JavaScript • Soluções Orientadas a Negócio
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
            >
              <span className="gradient-text">Luã Alves</span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6"
            >
              Desenvolvedor Front-End | React | JavaScript | Soluções Orientadas a Negócio
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-4 text-base leading-relaxed"
            >
              Desenvolvedor Front-End em transição estratégica após 10+ anos em vendas consultivas B2B. 
              Uno tecnologia e visão comercial para criar aplicações que não apenas funcionam — mas geram resultado.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <motion.button
                onClick={() => scrollToSection(sections.projects)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver projetos
              </motion.button>

              <motion.button
                onClick={() => scrollToSection(sections.contact)}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entrar em contato
              </motion.button>
            </motion.div>
          </div>

          {/* Coluna Direita - Foto + Ícones */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 flex flex-col items-center"
          >
            {/* Foto */}
            <div className="relative mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/30">
                <img 
                  src="/foto-lua.jpg.png" 
                  alt="Luã Alves - Desenvolvedor Front-End"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 20%'
                  }}
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#1a1a1a] px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-xs text-gray-300">
                  <span className="text-blue-400 font-medium">35 anos</span> • Rio de Janeiro
                </span>
              </div>
            </div>

            {/* Ícones das tecnologias - COM NOME NO HOVER */}
            <div className="w-full overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-nowrap justify-center gap-3 min-w-max mx-auto"
              >
                {techIcons.map(({ Icon, color, name }) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    className="group relative flex-shrink-0 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <div className="bg-[#1a1a1a] p-2.5 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                      <Icon style={{ color }} className="text-xl md:text-2xl" />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 bg-gray-400 rounded-full mt-1.5" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;