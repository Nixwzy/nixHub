import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// componentes
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl: pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor de Software</span>
            <h1 className="h1 mb-6">
              Olá! Sou
              <br />
              <span className="text-accent">Guilherme Lopes</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Transformo desafios em soluções inteligentes com paixão por
              tecnologia e inovação. Como estudante de Engenharia de Software,
              busco constantemente crescer e contribuir com projetos que
              impactem positivamente pessoas e negócios. Vamos criar algo
              extraordinário juntos?
            </p>
            {/* social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a
                href="/curriculo-guilherme-lopes.pdf"  
                download 
              >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Baixar Currículo</span>
                <FiDownload className="text-xl" />
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
