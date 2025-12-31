'use client';

import { Description } from '@radix-ui/react-dialog';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaPhp,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';

const about = {
  title: 'Sobre mim',
  description:
    'Sou estudante de Engenharia de Software com forte interesse em resolver problemas através da programação. Embora ainda esteja no início da minha jornada profissional, estou focado em expandir meu conhecimento prático e desenvolver habilidades em ambientes reais. Tenho uma abordagem colaborativa, gosto de aprender com meus colegas e busco sempre uma maneira eficiente de enfrentar desafios. Estou em busca de uma oportunidade de estágio onde possa contribuir com meu entusiasmo e vontade de crescer. Obrigado pela sua visita!',
  info: [
    {
      fieldName: 'Nome',
      fieldValue: 'Guilherme Lopes',
    },
    {
      fieldName: 'Contato',
      fieldValue: '+55 21 96689-8150',
    },
    {
      fieldName: 'Nacionalidade',
      fieldValue: 'Brasileiro',
    },
    {
      fieldName: 'E-mail',
      fieldValue: 'glopesglcontato@gmail.com',
    },
    {
      fieldName: 'Idiomas',
      fieldValue: 'Português, Inglês',
    },
  ],
};

const experience = {
  // icon: 'badge.svg',
  title: 'Certificados de Conclusão',
  description:
    'Reconhecimentos obtidos ao finalizar cursos.',
  items: [
    { 
      href: '',
      title: '',
      name: '',
    },
  ],
};

const education = {
  // icon: 'procurar badge.svg',
  title: 'Perfil Acadêmico',
  description:
    'Atualmente cursando Engenharia de Software, desenvolvendo conhecimentos teóricos e práticos para solucionar problemas reais por meio da tecnologia. Comprometido em expandir minha visão de mercado e aprimorar habilidades técnicas que me permitam colaborar com inovação e eficiência em projetos futuros.',
  items: [
    {
      institution: 'Universidade Estácio de Sá',
      degree: 'Engenharia de Software',
      duration: '2024-2029 (Presente)',
    },
    {
      institution: 'B7Web',
      degree: 'Desenvolvimento Full Stack',
      duration: '2024 - Presente',
    },
  ],
};

const skills = {
  title: 'Minhas habilidades',
  description:
    'Sou um desenvolvedor full-stack com experiência em tecnologias modernas de front-end e back-end. No front-end, trabalho com HTML5, CSS3, JavaScript, React.js e Next.js, criando interfaces dinâmicas e responsivas. Para o back-end, utilizo Node.js, PHP e bancos de dados como MySQL e PostgreSQL para construir soluções robustas e escaláveis. Também sou proficiente em TypeScript, TailwindCSS e Python, sempre buscando expandir meu conhecimento para oferecer soluções inovadoras e eficientes.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'javaScript',
    },
    {
      icon: <SiTypescript />,
      name: 'typeScript',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindCSS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaPython />,
      name: 'python',
    },
    {
      icon: <FaPhp />,
      name: 'php',
    },
    {
      icon: <SiMysql />,
      name: 'MySQL',
    },
    {
      icon: <SiPostgresql />,
      name: 'postgreSQL',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Acadêmico</TabsTrigger>
            <TabsTrigger value="experience">Certificados</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* certificados */}

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent text-lg font-bold">
                            {item.name}
                          </span>
                          <p className="text-md max-w-[260px] min-h-[60px] text-center text-white/60">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-3 mt-3">
                            <Link
                              href={item.href}
                              className="text-center border-accent hover:text-accent transition-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                              >
                                Visualizar
                              </Button>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Academico */}

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* habilidades */}

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* sobre mim */}

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
