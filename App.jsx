import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileText,
  GitBranch,
  Layers3,
  LineChart,
  Map,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

const whatsappNumber = "5511918570102";
const whatsappMessage = encodeURIComponent(
  "Olá, vim pelo site da MNDK Tech Projects e gostaria de entender como vocês podem me ajudar com projetos, processos ou tecnologia."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

function Button({ children, href, variant = "primary", className = "" }) {
  const classes = `btn ${variant === "secondary" ? "btnSecondary" : "btnPrimary"} ${className}`;
  if (href) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return <button className={classes}>{children}</button>;
}

function Logo({ compact = false, light = false }) {
  return (
    <div className="logoWrap">
      <div className="logoIcon">
        <svg viewBox="0 0 100 100" className="logoSvg" aria-label="MNDK Tech Projects logo">
          <path
            d="M16 78V22L36 58L50 36L64 58L84 22V78"
            fill="none"
            stroke="#F8FAFC"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 22L36 58L50 36L64 58L84 22"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="22" r="6" fill="#D4AF37" />
          <circle cx="16" cy="78" r="6" fill="#F8FAFC" />
          <circle cx="50" cy="36" r="6" fill="#F8FAFC" />
          <circle cx="84" cy="22" r="6" fill="#F8FAFC" />
          <circle cx="84" cy="78" r="6" fill="#D4AF37" />
          <circle cx="50" cy="72" r="5" fill="#D4AF37" />
          <path d="M16 78L50 72L84 78" stroke="#D4AF37" strokeWidth="3" fill="none" />
        </svg>
      </div>
      {!compact && (
        <div className="logoText">
          <p className={light ? "logoName light" : "logoName"}>MNDK</p>
          <p className="logoSub">Tech Projects</p>
        </div>
      )}
    </div>
  );
}

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const solutions = [
  {
    icon: BriefcaseBusiness,
    title: "Consultoria em Projetos de Tecnologia",
    text: "Transformamos ideias, problemas e necessidades em projetos estruturados, com escopo, requisitos, roadmap, backlog, histórias de usuário e critérios de aceite.",
  },
  {
    icon: Workflow,
    title: "Mapeamento de Processos",
    text: "Mapeamos o processo atual, identificamos gargalos, desenhamos o processo futuro e criamos planos de melhoria para operações mais eficientes.",
  },
  {
    icon: LineChart,
    title: "Melhoria Contínua",
    text: "Apoiamos empresas na redução de retrabalho, padronização de rotinas, criação de indicadores, organização de demandas e evolução constante da operação.",
  },
  {
    icon: FileText,
    title: "Escopos, Requisitos e Documentação",
    text: "Criamos documentos funcionais, regras de negócio, manuais de uso, atas, kickoffs, fluxos, histórias de usuário e materiais para sustentação e desenvolvimento.",
  },
  {
    icon: Layers3,
    title: "Gestão Ágil e PMO sob Demanda",
    text: "Organizamos backlog, prioridades, ritos, indicadores, governança, acompanhamento de entregas e comunicação entre negócio, operação e tecnologia.",
  },
  {
    icon: Code2,
    title: "Squads, Desenvolvimento e Automações",
    text: "Disponibilizamos profissionais e squads sob demanda para desenvolvimento de sistemas, MVPs, integrações, automações, melhorias e sustentação evolutiva.",
  },
];

const method = [
  {
    number: "01",
    icon: Target,
    title: "Diagnosticar",
    text: "Entendemos o problema, os objetivos, o cenário atual, os sistemas envolvidos, os impactos e as necessidades do negócio.",
  },
  {
    number: "02",
    icon: Map,
    title: "Mapear",
    text: "Mapeamos processos, fluxos, regras, gargalos, áreas envolvidas, integrações, riscos e oportunidades de melhoria.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Estruturar",
    text: "Transformamos o diagnóstico em escopo, backlog, roadmap, documentação, critérios de aceite, plano de ação e proposta de solução.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Executar",
    text: "Apoiamos a gestão da entrega ou disponibilizamos profissionais e squads para desenvolvimento, automação, implantação e sustentação.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Evoluir",
    text: "Acompanhamos indicadores, resultados, ajustes, melhorias e novas oportunidades para manter a evolução contínua.",
  },
];

const cases = [
  {
    title: "Assinatura Digital Automatizada",
    text: "Estruturação de fluxo automatizado de assinatura digital com geração de links, controle de status, validações, logs, reprocessamento, rastreabilidade, auditoria, documentação funcional e critérios de aceite.",
  },
  {
    title: "Login Único e Gestão de Acessos",
    text: "Desenho de solução para centralização de acessos, usuários, perfis, permissões, módulos, governança, fases de implantação, cadastro individual, cadastro em massa e controle por área.",
  },
  {
    title: "KITDOC Inteligente",
    text: "Mapeamento e estruturação de melhorias para gestão documental, kits, produtos, regras de documentos, visualização, geração, controle operacional e redução de erros no processo.",
  },
  {
    title: "Automação Operacional",
    text: "Estruturação de automações para reduzir processos manuais, organizar filas, controlar status, gerar relatórios, padronizar rotinas e aumentar eficiência operacional.",
  },
];

const specialties = [
  "Call centers",
  "Operações comerciais",
  "Produtos financeiros",
  "Crédito consignado",
  "Fintechs",
  "Correspondentes bancários",
  "Backoffices operacionais",
  "Áreas de atendimento, vendas, crédito e formalização",
  "Empresas com processos manuais ou descentralizados",
];

const founderSkills = [
  "Projetos de tecnologia",
  "Melhoria contínua",
  "Mapeamento de processos",
  "Produtos e sistemas",
  "Documentação funcional",
  "Gestão ágil",
  "Atendimento e vendas",
  "Qualidade operacional",
  "Sustentação de sistemas",
  "Backlog, requisitos e critérios de aceite",
];

function SectionTitle({ eyebrow, title, subtitle, center = false, dark = false }) {
  return (
    <div className={center ? "sectionTitle center" : "sectionTitle"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={dark ? "darkTitle" : ""}>{title}</h2>
      {subtitle && <p className={dark ? "darkSubtitle" : "subtitle"}>{subtitle}</p>}
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floatingWhatsapp">
      WhatsApp
      <ArrowRight size={16} />
    </a>
  );
}

export default function App() {
  return (
    <main>
      <FloatingWhatsApp />

      <header className="header">
        <div className="container headerInner">
          <a href="#inicio" className="headerLogo">
            <Logo light />
          </a>
          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button href={whatsappUrl} className="headerCta">
            Solicitar diagnóstico
          </Button>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroGrid"></div>
        <div className="heroBlur heroBlurOne"></div>
        <div className="heroBlur heroBlurTwo"></div>

        <div className="container heroInner">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="pill">
              <Network size={16} />
              Projetos • Processos • Tecnologia
            </div>
            <h1>
              Projetos mais <span>claros</span>, processos mais organizados e entregas mais eficientes.
            </h1>
            <p className="heroText">
              Consultoria completa em projetos de tecnologia, mapeamento de processos, melhoria contínua, automação e squads sob demanda para empresas que precisam transformar desafios operacionais em soluções digitais executáveis.
            </p>
            <div className="heroButtons">
              <Button href={whatsappUrl}>
                Solicitar diagnóstico
                <ArrowRight size={20} />
              </Button>
              <Button href="#solucoes" variant="secondary">
                Conhecer soluções
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="heroPanel">
              <div className="heroPanelInner">
                <Logo light />
                <div className="heroCards">
                  {[
                    [Target, "Visão estratégica", "Entendimento real do problema e dos objetivos."],
                    [Workflow, "Processos inteligentes", "Fluxos mais claros, padronizados e eficientes."],
                    [Code2, "Tecnologia integrada", "Soluções conectadas à operação do negócio."],
                    [UsersRound, "Execução com squads", "Profissionais sob demanda para acelerar entregas."],
                  ].map(([Icon, title, text]) => (
                    <div key={title} className="heroCard">
                      <div className="heroCardIcon">
                        <Icon size={24} />
                      </div>
                      <div>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="highlights">
        <div className="container highlightsGrid">
          {[
            [ShieldCheck, "Clareza", "Projetos estruturados"],
            [Settings2, "Controle", "Processos organizados"],
            [Zap, "Eficiência", "Menos retrabalho"],
            [Rocket, "Execução", "Tecnologia aplicada"],
          ].map(([Icon, title, text]) => (
            <div key={title} className="highlightCard">
              <div className="highlightIcon">
                <Icon size={24} />
              </div>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre-mndk" className="section">
        <div className="container twoColumns">
          <SectionTitle
            eyebrow="Sobre a MNDK"
            title="Consultoria, processos e tecnologia em uma atuação completa."
            subtitle="A MNDK Tech Projects nasceu para apoiar empresas que precisam organizar demandas, melhorar processos e evoluir tecnologicamente. Atuamos desde o entendimento do problema até a estruturação do projeto, documentação, gestão da entrega e execução com profissionais ou squads sob demanda."
          />
          <div className="checkGrid">
            {[
              "Diagnóstico e estruturação de projetos",
              "Mapeamento e melhoria de processos",
              "Documentação funcional e requisitos",
              "Gestão ágil, backlog e governança",
              "Desenvolvimento, automações e integrações",
              "Squads e profissionais sob demanda",
            ].map((item) => (
              <div key={item} className="checkItem">
                <CheckCircle2 size={20} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="section white">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Soluções"
            title="Soluções para organizar, melhorar e executar projetos de tecnologia."
            subtitle="Atuamos em todas as etapas da jornada: da análise inicial ao desenvolvimento, da operação ao processo, do escopo à entrega."
          />
          <div className="cardsGrid">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div key={solution.title} className="solutionCard" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }}>
                  <div className="solutionIcon">
                    <Icon size={28} />
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodo" className="methodSection">
        <div className="methodBlur methodBlurOne"></div>
        <div className="methodBlur methodBlurTwo"></div>
        <div className="container">
          <SectionTitle
            center
            dark
            eyebrow="Método MNDK"
            title="Do diagnóstico à evolução contínua."
            subtitle="Uma abordagem prática para entender, mapear, estruturar, executar e evoluir projetos e processos."
          />

          <div className="methodGrid">
            {method.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="methodCard">
                  <div className="methodTop">
                    <span>{step.number}</span>
                    <div className="methodIcon">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="especialidades" className="section">
        <div className="container twoColumns">
          <div>
            <SectionTitle
              eyebrow="Especialidades"
              title="Especialistas em operações, vendas e produtos financeiros."
              subtitle="A MNDK Tech Projects atende empresas de diferentes segmentos, mas possui maior aderência em operações de alto volume, vendas, atendimento, backoffice e produtos financeiros."
            />
            <p className="bodyText">
              Com experiência prática em ambientes operacionais e tecnológicos, conseguimos entender a dor da operação, traduzir necessidades em escopos e conectar áreas de negócio e tecnologia com mais clareza.
            </p>
          </div>
          <div className="specialtyGrid">
            {specialties.map((item) => (
              <div key={item} className="specialtyItem">
                <span></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="section white">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Cases e experiências"
            title="Experiências aplicadas em projetos reais."
            subtitle="Atuação na estruturação de projetos, processos e soluções digitais com foco em clareza, rastreabilidade, eficiência e evolução operacional."
          />
          <div className="caseGrid">
            {cases.map((item, index) => (
              <div key={item.title} className="caseCard">
                <div className="caseHeader">
                  <div className="caseIcon">
                    <GitBranch size={24} />
                  </div>
                  <span>Case {index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="container founderGrid">
          <div className="founderCard">
            <div className="avatar">AM</div>
            <h3>Alan Mandruk</h3>
            <p className="founderRole">Fundador da MNDK Tech Projects</p>
            <p className="founderText">
              12 anos de experiência em atendimento ao público, vendas, qualidade, produtos, projetos, melhoria contínua e processos.
            </p>
            <div className="skillsGrid">
              {founderSkills.map((skill) => (
                <div key={skill} className="skillItem">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle
              eyebrow="Sobre o fundador"
              title="Experiência prática conectando operação, processos e tecnologia."
              subtitle="A MNDK Tech Projects é liderada por Alan Mandruk, profissional com 12 anos de experiência em atendimento ao público, vendas, qualidade, produtos, projetos, melhoria contínua e processos."
            />
            <div className="bodyTextGroup">
              <p>
                Sua trajetória reúne vivência prática em operações, relacionamento com clientes, análise de qualidade, estruturação de produtos, sustentação de sistemas, documentação funcional, mapeamento de processos, organização de backlog e acompanhamento de projetos de tecnologia.
              </p>
              <p>
                Ao longo da carreira, atuou direta ou indiretamente com produtos, operações e soluções relacionadas a empresas como TIM, Serasa, Vivo, Único, NuVidio e outras iniciativas do mercado, conectando visão de negócio, operação e tecnologia para transformar problemas complexos em projetos claros e executáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contactSection">
        <div className="contactBlur contactBlurOne"></div>
        <div className="contactBlur contactBlurTwo"></div>
        <div className="container contactInner">
          <p className="eyebrow">Contato</p>
          <h2>Quer organizar um projeto, melhorar um processo ou tirar uma solução tecnológica do papel?</h2>
          <p>
            A MNDK Tech Projects pode apoiar sua empresa desde o diagnóstico inicial até a execução da solução, conectando projetos, processos e tecnologia para gerar entregas mais claras, eficientes e sustentáveis.
          </p>
          <div className="contactButtons">
            <Button href={whatsappUrl}>
              Solicitar diagnóstico pelo WhatsApp
              <ArrowRight size={20} />
            </Button>
            <div className="locationPill">São Paulo/SP • Atendimento remoto para todo o Brasil</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <Logo light />
            <p>
              MNDK Tech Projects — Projetos, Processos e Tecnologia. Projetos mais claros, processos mais organizados e entregas mais eficientes.
            </p>
          </div>
          <div className="footerInfo">
            <p>WhatsApp: (11) 9 1857-0102</p>
            <p>E-mail: a definir</p>
            <p>Instagram: a definir</p>
            <p>Atendimento remoto para todo o Brasil</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
