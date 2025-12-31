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
    href: 'https://app.b7web.com.br/certificates/03170bd0-0620-4456-828a-f2a32579dcb8',
    name: 'Fundamentos de GIT',
    title: 'Carga horária de 3 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/5984d1cf-e8f0-4d42-8dda-219170c9a424',
    name: 'GitHub na prática',
    title: 'Carga Horária de 5 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/a1b641a7-8081-4fcd-81c5-a0d42e7c2583',
    name: 'Fundamentos em HTML/CSS ',
    title: 'Carga horária de 12 horas',
  },
    {
    href: 'https://app.b7web.com.br/certificates/3251624',
    name: 'HTML5 e CSS3',
    title: 'Carga horária de 92 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/f520dc3f-d004-43e6-80a6-28cf6d23eb3f',
    name: 'HTML5 e CSS3 (2º Módulo)',
    title: 'Carga Horária de 44 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/1ebdedd0-0dd9-4046-ad59-4a79f3d76b7b',
    name: 'HTML e CSS Avançado',
    title: 'Carga Horária de 24 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/1262095',
    name: 'TailwindCSS',
    title: 'Carga horária de 20 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/07aabc89-d5b9-4e10-9f94-3d89071d4b79',
    name: 'TailwindCSS (2º Módulo)',
    title: 'Carga horária de 8 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/bad3679b-d477-45c8-abf8-95e09f62285e',
    name: 'TailwindCSS (3º Módulo)',
    title: 'Carga horária de 3 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/241b5671-84d0-48d8-97ef-61992bbcb29f',
    name: 'Fundamentos de Javascript',
    title: 'Carga horária de 12 horas',
  },
    {
    href: 'https://app.b7web.com.br/certificates/6702318',
    name: 'Javascript',
    title: 'Carga horária de 66 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/e157f99e-d233-4e22-ba9b-8a3d2bb2d078',
    name: 'Javascript (2º Módulo)',
    title: 'Carga Horária de 45 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/514ee409-4266-47aa-bc87-a3269e7a00c4',
    name: 'Javascript Avançado',
    title: 'Carga horária de 17 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/d0cf4eed-65a5-48a5-814c-48361c1267a2',
    name: 'Typescript do Zero',
    title: 'Carga horária de 5 horas',
  },
    {
    href: 'https://app.b7web.com.br/certificates/3847049',
    name: 'Typescript',
    title: 'Carga horária de 20 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/f1a14b7f-2ec6-4ec8-9857-06bd7ecc603b',
    name: 'Typescript (2º Módulo)',
    title: 'Carga Horária de 5 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/45e646d7-3e72-4bb5-9b73-f3591a313b4b',
    name: 'Fundamentos de ReactJS',
    title: 'Carga horária de 12 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/99e64a9f-352d-414c-8c2e-c507f6aba0d2',
    name: 'React Intermediário',
    title: 'Carga horária de 12 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/6c2857d8-b060-478c-88d5-0989ddc303d3',
    name: 'ReactHookForm e Zod',
    title: 'Carga Horária de 5 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/4a08bf51-ca3d-443c-b7fa-e2e3c0ad17ba',
    name: 'SQL do Zero',
    title: 'Carga horária de 6 horas',
  },
   {
    href: 'https://app.b7web.com.br/certificates/9375234',
    name: 'Banco de Dados',
    title: 'Carga horária de 20 horas',
  },
  {
    href: 'https://app.b7web.com.br/certificates/4d8b450a-b9f8-42a1-8912-8a2da854a6d7',
    name: 'Bancos de Dados 2',
    title: 'Carga Horária de 6 horas',
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
      duration: '2023-2027 (Presente)',
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
              <div className="flex flex-col gap-[30px] text-center">
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
