import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target, Globe, MessageCircle, Search, MapPin, Rocket, Star, Quote, Clock } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import riseDigitalLogo from "@/assets/rise-digital-logo-new.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import client logos
import fidLogo from '@/assets/clients/fid-logo.png';
import berleseLogo from '@/assets/clients/berlese-logo.png';
import borsoiLogo from '@/assets/clients/borsoi-logo.png';
import cacauShowLogo from '@/assets/clients/cacau-show-logo.png';
import drogaRaiaLogo from '@/assets/clients/droga-raia-logo.png';
import globalLogo from '@/assets/clients/global-logo.png';
import integraspLogo from '@/assets/clients/integrasp-logo.png';
import jazztechLogo from '@/assets/clients/jazztech-logo.png';
import zampLogo from '@/assets/clients/zamp-logo.png';
const Index = () => {
  const heroRef = useScrollReveal({
    threshold: 0.2
  });
  const validationRef = useScrollReveal({
    threshold: 0.1
  });
  const problemRef = useScrollReveal({
    threshold: 0.1
  });
  const basesRef = useScrollReveal({
    threshold: 0.1
  });
  const methodRef = useScrollReveal({
    threshold: 0.1
  });
  const testimonialsRef = useScrollReveal({
    threshold: 0.1
  });
  const limitedRef = useScrollReveal({
    threshold: 0.1
  });
  const closingRef = useScrollReveal({
    threshold: 0.1
  });

  // Client logos data
  const clientLogos = [{
    src: fidLogo,
    alt: "FID"
  }, {
    src: berleseLogo,
    alt: "Berlese"
  }, {
    src: borsoiLogo,
    alt: "Borsoi"
  }, {
    src: cacauShowLogo,
    alt: "Cacau Show"
  }, {
    src: drogaRaiaLogo,
    alt: "Droga Raia"
  }, {
    src: globalLogo,
    alt: "Global"
  }, {
    src: integraspLogo,
    alt: "Integra SP"
  }, {
    src: jazztechLogo,
    alt: "JazzTech"
  }, {
    src: zampLogo,
    alt: "Zamp"
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative">
        <div className="container-custom md:py-8 my-0 px-0 py-[26px] mx-[50px]">
          <a href="/" className="inline-block hover:scale-105 transition-transform duration-300 px-0 mx-[350px]">
            <img src={riseDigitalLogo} alt="Rise Digital" className="h-28 md:h-32 w-auto" />
          </a>
        </div>
      </header>
      
      {/* Hero Section */}
      <section ref={heroRef.elementRef} className={`section-spacing py-20 md:py-32 pt-8 md:pt-12 relative z-10 scroll-reveal ${heroRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-title mb-8 leading-tight max-w-5xl mx-auto font-inter">
            Enquanto seus concorrentes colecionam curtidas, nós construímos seu faturamento.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">Com milhões investidos em anúncios, milhares de leads gerados, experiência direta com empresários e certificações oficiais, ajudamos empresas a transformar marketing em crescimento real e previsível.</p>
          <div className="flex justify-center">
            <Button variant="hero" size="lg">
              Quero Crescer com a Rise
            </Button>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section ref={validationRef.elementRef} className={`section-spacing relative z-10 scroll-reveal ${validationRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title">
              Experiência validada em múltiplos segmentos
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
              O mercado digital está cheio de especialistas em ferramentas que nunca sentiram o peso da pressão por resultados que um negócio real exige. Nós vimos o resultado disso de perto: donos de negócio, que entendem tudo sobre seus produtos e clientes, se tornando reféns de um marketing que não entende nada sobre negócios. De empresas locais a softwares, já ajudamos empresas a atrair clientes e faturar mais através de estratégias digitais bem estruturadas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className={`flex flex-col items-center text-center scroll-reveal ${validationRef.isVisible ? 'visible scroll-reveal-stagger-1' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 icon-container">
                  <TrendingUp className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-semibold text-foreground/90">+R$4 milhões gerenciados em anúncios</p>
              </div>
              
              <div className={`flex flex-col items-center text-center scroll-reveal ${validationRef.isVisible ? 'visible scroll-reveal-stagger-2' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 icon-container">
                  <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-semibold text-foreground/90">
                  +70.000 leads captados
                </p>
              </div>
              
              <div className={`flex flex-col items-center text-center scroll-reveal ${validationRef.isVisible ? 'visible scroll-reveal-stagger-3' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 icon-container">
                  <Award className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-semibold text-foreground/90">
                  +3 anos de experiência prática
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={problemRef.elementRef} className={`section-spacing relative z-10 scroll-reveal ${problemRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">
              Por que muitos empresários não têm retorno no digital?
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              A maioria investe em soluções digitais olhando para as métricas erradas. Alcance, curtidas, cliques… tudo isso pode parecer bonito em relatórios, mas não paga boletos nem aumenta o caixa. O que realmente importa são clientes entrando na sua base e faturamento crescendo mês após mês. Esse é o foco da Rise.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Bases Section */}
      <section ref={basesRef.elementRef} className={`section-spacing relative z-10 scroll-reveal ${basesRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="section-title">
              As 3 Bases do Crescimento Digital
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 max-w-4xl mx-auto">Nós acreditamos que resultados duradouros são fruto de um processo
claro. Por isso, nossa metodologia é fundamentada em três bases
estratégicas que se conectam para mover seu negócio em uma única
direção: o crescimento.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 text-center scroll-reveal ${basesRef.isVisible ? 'visible scroll-reveal-stagger-1' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 icon-container mx-[80px]">
                  <Target className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter text-center">Sistema de Aquisição de Clientes</h3>
                <p className="text-foreground/70 leading-relaxed text-center">Utilizamos campanhas de tráfego pago (Google &amp; Meta Ads) com
inteligência de dados para colocar sua marca na frente de clientes
prontos para comprar, transformando investimento em oportunidades
reais de negócio.</p>
              </Card>

              <Card className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 text-center scroll-reveal ${basesRef.isVisible ? 'visible scroll-reveal-stagger-2' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 icon-container mx-[80px]">
                  <Globe strokeWidth={1.5} className="w-8 h-8 text-primary mx-0" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter text-center">Ativo Digital de Conversão</h3>
                <p className="text-foreground/70 leading-relaxed text-center">Criamos a experiência digital que seu cliente precisa para tomar a
decisão de compra: landing pages e sites institucionais de alta
performance que guiam o visitante diretamente para a ação.</p>
              </Card>

              <Card className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 text-center scroll-reveal ${basesRef.isVisible ? 'visible scroll-reveal-stagger-3' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 icon-container mx-[80px]">
                  <MessageCircle strokeWidth={1.5} className="w-8 h-8 text-primary mx-0" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter text-center">Inteligência de Atendimento e Vendas</h3>
                <p className="text-foreground/70 leading-relaxed text-center">Implementamos um sistema de atendimento inteligente que opera
24/7 nos seus principais canais de atendimento, atuando para
recepcionar, qualificar, agendar reuniões e até vender, garantindo que
nenhuma oportunidade de negócio seja perdida por falta de resposta.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Método Section */}
      <section ref={methodRef.elementRef} className={`section-spacing relative z-10 scroll-reveal ${methodRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="section-title">
              Estratégia antes de ferramentas. Sempre.
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
              Não acreditamos em soluções genéricas. Cada negócio tem um ponto de partida e um destino diferente. Por isso, antes de falar em anúncios, landing pages ou automação, entendemos sua realidade, estudamos sua concorrência e definimos a rota que realmente vai gerar crescimento.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className={`flex flex-col items-center text-center scroll-reveal ${methodRef.isVisible ? 'visible scroll-reveal-stagger-1' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 icon-container">
                  <Search className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Diagnóstico Estratégico</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Mapeamos seu mercado, identificamos oportunidades ocultas e entendemos onde sua empresa quer chegar.
                </p>
              </div>

              <div className={`flex flex-col items-center text-center scroll-reveal ${methodRef.isVisible ? 'visible scroll-reveal-stagger-2' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 icon-container">
                  <MapPin className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Plano de Crescimento</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Criamos uma rota clara e prática para transformar marketing em faturamento real.
                </p>
              </div>

              <div className={`flex flex-col items-center text-center scroll-reveal ${methodRef.isVisible ? 'visible scroll-reveal-stagger-3' : ''}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 icon-container">
                  <Rocket className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Execução e Escala</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Implementamos campanhas, otimizamos continuamente e escalamos seus resultados mês após mês.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="hero" size="lg">Quero um plano de crescimento</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef.elementRef} className={`section-spacing relative z-10 scroll-reveal ${testimonialsRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="section-title">Nossos clientes já sabem o caminho</h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 max-w-4xl mx-auto">De negócios locais a softwares, já ajudamos empresas a gerar oportunidades e crescer de forma consistente. Tudo isso, com base no método que você acabou de ver acima.</p>
            
            {/* Logo Section */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-8 font-inter">Empresas que já confiaram na Rise</h3>
              <div className="max-w-4xl mx-auto">
                <Carousel plugins={[Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false
              })]} opts={{
                align: "start",
                loop: true
              }} className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {clientLogos.map((logo, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="flex items-center justify-center h-20 md:h-24 bg-white rounded-lg border border-gray-200 p-4 hover:bg-white hover:shadow-md transition-all duration-300 group">
                          <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0" />
                        </div>
                      </CarouselItem>)}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="hero" size="lg">
                Quero ter resultados assim com a Rise
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Agenda Section */}
      <section ref={limitedRef.elementRef} className={`section-spacing relative z-10 scroll-reveal ${limitedRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">
              Agenda limitada para novos clientes
            </h2>
            
            {/* Urgency Box */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl p-8 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary mr-3" strokeWidth={1.5} />
                  <span className="text-primary font-semibold text-lg">Vagas Limitadas</span>
                </div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                  Para garantir dedicação total em cada projeto, trabalhamos com um número restrito de novos clientes por mês. Se você deseja uma estratégia digital focada em crescimento real, fale com nosso time hoje mesmo.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="hero" size="lg" className="animate-pulse">
                Quero meu projeto com a Rise
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section ref={closingRef.elementRef} className={`section-spacing relative z-10 scroll-reveal ${closingRef.isVisible ? 'visible' : ''}`}>
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">
              Rise Digital – Estratégia, Clareza e Crescimento Real
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12 max-w-4xl mx-auto">
              Mais do que marketing genérico, entregamos uma rota clara para aumentar o faturamento da sua empresa com consistência e transparência. Não se trata apenas de anúncios, mas de construir previsibilidade e crescimento sustentável para o seu negócio.
            </p>
            <div className="flex justify-center">
              <Button variant="hero" size="lg">Clique aqui e fale com nosso time</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border/30">
        <div className="container-custom text-center">
          <a href="/" className="inline-block mb-4 hover:scale-105 transition-transform duration-300">
            <img src={riseDigitalLogo} alt="Rise Digital" className="h-28 md:h-32 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </a>
          <p className="text-foreground/60">© 2025 Rise Digital. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>;
};
export default Index;