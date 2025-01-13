'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Compromisso com a Qualidade',
    description:
      'Minha prioridade é sempre entregar resultados sólidos e bem acabados, com atenção aos detalhes e foco em excelência.',
    href: '',
  },
  {
    num: '02',
    title: 'Aprendizado Contínuo',
    description:
      'Estou sempre aprendendo novas tecnologias e tendências para estar à frente e oferecer soluções inovadoras.',
    href: '',
  },
  {
    num: '03',
    title: 'Trabalho em Equipe',
    description:
      'Acredito no poder da colaboração e valorizo a troca de ideias em projetos que gerem impacto real.',
    href: '',
  },
  {
    num: '04',
    title: 'Foco no Resultado',
    description:
      'Busco alinhar objetivos e estratégias para entregar valor e contribuir com o sucesso dos projetos em que atuo.',
    href: '',
  },
];


import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                {/* TITULO DO SERVIÇO */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                {/* DESCRIÇÃO */}
                <p className='text-white/60'>{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
