import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target, Globe, MessageCircle, Search, MapPin, Rocket, Star, Quote, Clock } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="section-spacing py-20 md:py-32 relative z-10">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-title mb-8 leading-tight max-w-5xl mx-auto font-inter">
            Enquanto seus concorrentes colecionam curtidas, nós construímos seu faturamento.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Com +R$3,5 milhões investidos em anúncios, +70.000 leads gerados e certificações oficiais, 
            ajudamos empresas a transformar marketing em crescimento real e previsível.
          </p>
          <div className="flex justify-center">
            <Button variant="hero" size="lg">
              Quero Crescer com a Rise
            </Button>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="section-spacing relative z-10">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title">
              Experiência validada em múltiplos segmentos
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
              O mercado digital está cheio de especialistas em ferramentas que nunca sentiram o peso da pressão por resultados que um negócio real exige. Nós vimos o resultado disso de perto: donos de negócio, que entendem tudo sobre seus produtos e clientes, se tornando reféns de um marketing que não entende nada sobre negócios. De empresas locais a softwares, já ajudamos empresas a atrair clientes e faturar mais através de estratégias digitais bem estruturadas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-semibold text-foreground/90">
                  +R$3,5 milhões gerenciados em anúncios
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-semibold text-foreground/90">
                  +70.000 leads captados
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
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
      <section className="section-spacing relative z-10">
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
      <section className="section-spacing relative z-10">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="section-title">
              As 3 Bases do Crescimento Digital
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
              Para construir esses resultados sólidos e duradouros, nossa atuação se baseia em três bases estratégicas e complementares.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 text-left">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Sistema de Aquisição de Clientes</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Campanhas de tráfego pago no Google & Meta Ads para atrair clientes com alto potencial de compra.
                </p>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 text-left">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Ativo Digital de Conversão</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Landing pages e sites institucionais de alta performance focados em conversão.
                </p>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 text-left">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Inteligência de Atendimento e Vendas</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Automação / inteligência no WhatsApp com atendimento 24/7 para qualificar leads e não deixar oportunidades escaparem.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Método Section */}
      <section className="section-spacing relative z-10">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="section-title">
              Estratégia antes de ferramentas. Sempre.
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
              Não acreditamos em soluções genéricas. Cada negócio tem um ponto de partida e um destino diferente. Por isso, antes de falar em anúncios, landing pages ou automação, entendemos sua realidade, estudamos sua concorrência e definimos a rota que realmente vai gerar crescimento.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Diagnóstico Estratégico</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Mapeamos seu mercado, identificamos oportunidades ocultas e entendemos onde sua empresa quer chegar.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Plano de Crescimento</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Criamos uma rota clara e prática para transformar marketing em faturamento real.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-4 font-inter">Execução e Escala</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Implementamos campanhas, otimizamos continuamente e escalamos seus resultados mês após mês.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="hero" size="lg">
                Quero um plano de crescimento para minha empresa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing relative z-10">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="section-title">
              Nossos clientes falam por nós
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
              De negócios locais a softwares, já ajudamos empresas a gerar oportunidades e crescer de forma consistente. Confira alguns feedbacks e marcas que confiaram na Rise.
            </p>
            
            {/* Logo Section */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-8 font-inter">Empresas que confiam na Rise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
                <div className="h-16 bg-card/30 rounded-lg flex items-center justify-center border border-border/30">
                  <span className="text-foreground/60 font-semibold">Logo Cliente 1</span>
                </div>
                <div className="h-16 bg-card/30 rounded-lg flex items-center justify-center border border-border/30">
                  <span className="text-foreground/60 font-semibold">Logo Cliente 2</span>
                </div>
                <div className="h-16 bg-card/30 rounded-lg flex items-center justify-center border border-border/30">
                  <span className="text-foreground/60 font-semibold">Logo Cliente 3</span>
                </div>
                <div className="h-16 bg-card/30 rounded-lg flex items-center justify-center border border-border/30">
                  <span className="text-foreground/60 font-semibold">Logo Cliente 4</span>
                </div>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-semibold gradient-title mb-8 font-inter">O que nossos clientes dizem</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-left relative">
                  <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4 italic">
                    "Aumentamos nosso faturamento em 300% em 6 meses. O método da Rise realmente funciona!"
                  </p>
                  <div className="text-sm text-foreground/60">
                    <strong>Maria Silva</strong> - CEO, Empresa ABC
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-left relative">
                  <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4 italic">
                    "Finalmente encontramos uma agência que entende de negócio, não só de marketing."
                  </p>
                  <div className="text-sm text-foreground/60">
                    <strong>João Santos</strong> - Diretor, Tech Solutions
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-left relative">
                  <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4 italic">
                    "Triplicamos nossos leads qualificados e o ROI superou todas as expectativas."
                  </p>
                  <div className="text-sm text-foreground/60">
                    <strong>Ana Costa</strong> - Fundadora, StartupXYZ
                  </div>
                </Card>
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
      <section className="section-spacing relative z-10">
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
      <section className="section-spacing relative z-10">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">
              Rise Digital – Estratégia, Clareza e Crescimento Real
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12 max-w-4xl mx-auto">
              Mais do que marketing genérico, entregamos uma rota clara para aumentar o faturamento da sua empresa com consistência e transparência. Não se trata apenas de anúncios, mas de construir previsibilidade e crescimento sustentável para o seu negócio.
            </p>
            <div className="flex justify-center">
              <Button variant="hero" size="lg">
                Clique aqui e fale com nosso time no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border/30">
        <div className="container-custom text-center">
          <p className="text-foreground/60">
            © 2024 Sua Landing Page. Desenvolvido com tecnologia moderna.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;