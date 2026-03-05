import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, 
  FaDatabase, FaNodeJs, FaAngular, FaBootstrap, FaChartBar
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", icon: FaReact, color: "#61DAFB", level: 85 },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 90 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 70 },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 80 },
    { name: "AngularJS", icon: FaAngular, color: "#DD0031", level: 65 },
    { name: "Git", icon: FaGitAlt, color: "#F05032", level: 85 },
    { name: "Power BI", icon: FaChartBar, color: "#F2C811", level: 85 },
    { name: "SQL", icon: FaDatabase, color: "#4479A1", level: 80 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 75 },
    { name: "Node.js", icon: FaNodeJs, color: "#68A063", level: 70 }
  ];

  const softSkills = [
    "Comunicação", "Escuta Ativa", "Empatia", "Vendas Consultivas",
    "Gestão de CRM", "Análise de Dados", "Orientação a Métricas",
    "Pensamento Crítico", "Adaptabilidade", "Resolução de Problemas",
    "Visão de Negócio", "Tomada de Decisão", "Trabalho em Equipe",
    "Aprendizado Contínuo", "Organização", "Prospecção Estratégica"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Habilidades
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Hard Skills - Grid de Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
        >
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <skill.icon style={{ color: skill.color }} className="text-2xl" />
                <span className="text-sm font-medium text-white">{skill.name}</span>
              </div>
              <div className="w-full h-1.5 bg-[#252525] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-[#1a1a1a] rounded-xl border border-gray-800"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-white">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 bg-[#252525] rounded-full text-xs text-gray-300 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Diferencial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <span className="text-sm text-gray-400">
            <span className="text-blue-400 font-semibold">Diferencial:</span> Front-End + Dados + Negócios
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;