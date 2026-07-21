import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";

import cindyPhoto from "./assets/cindy.jpg";
import CursorStars from "./components/CursorStars";
import Navbar from "./components/Navbar";

import starboostVideo from "./assets/videos/starboost.mp4";
import laruelleVideo from "./assets/videos/laruelle.mp4";

import sitegrowLogo from "./assets/logos/sitegrow.png";
import desjardinsLogo from "./assets/logos/desjardins.png";
import royalLogo from "./assets/logos/royal-lepage.png";

import swapItImage from "./assets/projects/swap-it.png";

import SignatureAccent from "./components/SignatureAccent";

const experiences = [
  {
    company: "Sitegrow",
    role: "Chargée de projet numérique — SEO / GEO",
    period: "Mars 2026 — Juillet 2026",
    logo: sitegrowLogo,
    logoClassName: "max-h-8 max-w-[150px]",
    gridClassName: "md:grid-cols-2",
    points: [
      "Gestion proactive d’un portefeuille d’environ 25 clients.",
      "Coordination entre clients, développement et direction.",
      "Suivi des livrables SEO/GEO, contenus, fiches Google et optimisations web.",
      "Amélioration des processus internes et du suivi des tâches.",
    ],
  },
  {
    company: "Desjardins",
    role: "Consultante — Gestion de données et processus",
    period: "2025",
    logo: desjardinsLogo,
    logoClassName: "max-h-8 max-w-[155px]",
    gridClassName: "md:grid-cols-3",
    points: [
      "Analyse de flux opérationnels complexes.",
      "Coordination d’échanges de données en environnement sécurisé.",
      "Documentation rigoureuse des procédures.",
    ],
  },
  {
    company: "Royal LePage",
    role: "Coordonnatrice de projet Agile — Stage",
    period: "2025",
    logo: royalLogo,
    logoClassName: "max-h-10 max-w-[170px]",
    gridClassName: "md:grid-cols-2",
    points: [
      "Coordination de deux équipes web et mobile en mode Agile.",
      "Gestion du backlog, planification de sprints et rituels.",
      "Traduction des besoins d’affaires en récits utilisateurs.",
      "Suivi des livrables et coordination des parties prenantes.",
    ],
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6eee9] text-[#3a2a25]">
      <CursorStars />
      <Navbar />

      {/* =========================
          HERO
      ========================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-5 pb-20 pt-32 md:px-6 md:py-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute left-[-140px] top-[90px] h-72 w-72 rounded-full bg-[#d9b5a7] blur-3xl md:h-80 md:w-80"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.28, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-[40px] right-[-150px] h-80 w-80 rounded-full bg-[#b98b7a] blur-3xl md:bottom-[80px] md:h-96 md:w-96"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A97868] sm:text-sm md:mb-5 md:tracking-[0.35em]"
            >
              Portfolio numérique
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-[#3a2a25] sm:text-5xl md:mx-0 md:text-7xl"
            >
              Cindy Bragdon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6f5a52] sm:text-lg md:mx-0 md:mt-6 md:text-xl md:leading-8"
            >
              Gestion de projets numériques, coordination Agile et solutions web
              pensées avec structure et clarté.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:gap-4"
            >
              <a
                href="mailto:cindy.bragdon@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#A97868] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a97868]/25 transition hover:-translate-y-0.5 hover:bg-[#956454]"
              >
                Me joindre
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/cindy-bragdon/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A97868]/30 bg-white/40 px-6 py-3 text-sm font-semibold text-[#5a4038] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/70"
              >
                <ExternalLink size={17} />
                LinkedIn
              </a>

              <a
                href="/cv-cindy-bragdon.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/45 px-6 py-3 text-sm font-semibold text-[#5a4038] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/75"
              >
                Voir mon CV
                <ExternalLink size={17} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95 }}
              className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3 md:mx-0 md:mt-10 md:gap-4"
            >
              <div className="rounded-2xl border border-white/50 bg-white/35 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-[#3a2a25]">
                  Organisée
                </p>
                <p className="mt-1 text-sm text-[#6f5a52]">
                  Priorités claires, livrables suivis.
                </p>
              </div>

              <div className="rounded-2xl border border-white/50 bg-white/35 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-[#3a2a25]">Humaine</p>
                <p className="mt-1 text-sm text-[#6f5a52]">
                  Communication simple et efficace.
                </p>
              </div>

              <div className="rounded-2xl border border-white/50 bg-white/35 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-[#3a2a25]">
                  Technique
                </p>
                <p className="mt-1 text-sm text-[#6f5a52]">
                  Vision produit et compréhension web.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[310px] sm:max-w-sm"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-white/35 backdrop-blur-xl md:-inset-4 md:rounded-[2.5rem]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-2.5 shadow-2xl shadow-[#6f5a52]/20 backdrop-blur-md md:rounded-[2.5rem] md:p-3">
              <img
                src={cindyPhoto}
                alt="Cindy Bragdon"
                className="h-[390px] w-full rounded-[1.5rem] object-cover object-center sm:h-[460px] md:h-[520px] md:rounded-[2rem]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-white/60 bg-white/60 p-4 text-center shadow-xl backdrop-blur-md"
            >
              <p className="text-sm font-semibold text-[#3a2a25]">
                Disponible pour nouveaux défis numériques
              </p>

              <p className="mt-1 flex items-center justify-center gap-2 text-xs text-[#6f5a52] sm:text-sm">
                <Mail size={15} />
                cindy.bragdon@gmail.com
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          À PROPOS
      ========================= */}
      <section id="about" className="relative px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/60 bg-white/35 p-6 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl md:p-12"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A97868] sm:text-sm md:tracking-[0.35em]">
              À propos
            </p>

            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
              <h2 className="text-3xl font-bold leading-tight text-[#3a2a25] md:text-5xl">
                Je transforme les idées floues en projets clairs, suivis et
                livrables.
              </h2>

              <div className="space-y-5 text-base leading-8 text-[#6f5a52] md:text-lg">
                <p>
                  Je suis une professionnelle de l’informatique orientée vers la
                  gestion de projets numériques, la coordination Agile et la
                  communication entre les équipes techniques, les clients et les
                  parties prenantes.
                </p>

                <p>
                  Mon approche combine structure, écoute et compréhension
                  technique. J’aime clarifier les besoins, organiser les
                  priorités, suivre les livrables et créer un cadre de travail
                  où les projets avancent sans perdre l’humain en chemin.
                </p>

                <p>
                  Douce dans l’approche, ferme dans le suivi : j’aime que les
                  choses soient bien faites, bien comprises et livrées avec
                  intention.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          EXPÉRIENCES
      ========================= */}
      <section id="experience" className="relative px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A97868] sm:text-sm md:tracking-[0.35em]">
              Expériences
            </p>

            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#3a2a25] md:text-5xl">
                Des projets suivis avec rigueur, clarté et sens des priorités.
              </h2>

              <p className="max-w-md text-base leading-7 text-[#6f5a52]">
                Mon parcours combine coordination, analyse, relation client et
                compréhension technique des environnements numériques.
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((experience) => (
                <motion.article
                  key={experience.company}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="rounded-[2rem] border border-white/60 bg-white/35 p-6 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl md:p-8"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="flex h-[68px] w-full items-center justify-center rounded-2xl border border-white/60 bg-white/50 px-5 py-3 shadow-inner shadow-[#6f5a52]/5 sm:w-[205px]">
                        <img
                          src={experience.logo}
                          alt={`Logo ${experience.company}`}
                          className={`w-auto object-contain ${experience.logoClassName}`}
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-[#3a2a25]">
                          {experience.company}
                        </h3>
                        <p className="mt-1 text-[#A97868]">
                          {experience.role}
                        </p>
                      </div>
                    </div>

                    <p className="w-fit rounded-full bg-white/50 px-4 py-2 text-sm font-semibold text-[#6f5a52]">
                      {experience.period}
                    </p>
                  </div>

                  <ul
                    className={`mt-6 grid gap-3 text-[#6f5a52] ${experience.gridClassName}`}
                  >
                    {experience.points.map((point) => (
                      <li key={point} className="rounded-2xl bg-white/35 p-4">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
    PROJETS
========================= */}
<section id="projects" className="relative px-5 py-20 md:px-6 md:py-24">
  <div className="mx-auto max-w-6xl">
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A97868] sm:text-sm md:tracking-[0.35em]">
        Projets
      </p>

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#3a2a25] md:text-5xl">
          Des idées transformées en concepts numériques structurés.
        </h2>

        <p className="max-w-md text-base leading-7 text-[#6f5a52]">
          Dans mes projets personnels, je travaille la conception, la
          validation, l’organisation, la recherche technologique et la
          définition de MVP.
        </p>
      </div>

      <div className="mb-8 rounded-[2rem] border border-white/60 bg-white/35 p-6 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl md:p-8">
        <h3 className="text-2xl font-bold text-[#3a2a25]">
          Mon rôle dans ces projets
        </h3>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-white/35 p-4">
            <p className="font-semibold text-[#3a2a25]">
              Gestion de projet
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6f5a52]">
              Organisation des tâches, priorisation, suivi dans Trello et
              structuration des étapes.
            </p>
          </div>

          <div className="rounded-2xl bg-white/35 p-4">
            <p className="font-semibold text-[#3a2a25]">
              Conception produit
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6f5a52]">
              Définition des fonctionnalités, parcours utilisateurs,
              preuves de concept et MVP.
            </p>
          </div>

          <div className="rounded-2xl bg-white/35 p-4">
            <p className="font-semibold text-[#3a2a25]">
              Vision marché
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6f5a52]">
              Recherche de technologies adaptées, validation des besoins et
              identification d’utilisateurs ou clients potentiels.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl"
        >
          <a
            href="https://swap-it.ca"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir le site Swap-It"
            className="relative block overflow-hidden rounded-t-[2rem] bg-white/40"
          >
            <img
              src={swapItImage}
              alt="Aperçu du projet Swap-It"
              className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[310px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3a2a25]/35 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-[#3a2a25] shadow-lg backdrop-blur-md transition group-hover:bg-white">
              Voir le site
              <ExternalLink size={15} />
            </div>
          </a>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-5 inline-flex w-fit rounded-full bg-[#A97868]/10 px-4 py-2 text-sm font-semibold text-[#A97868]">
              2024 — En cours
            </div>

            <h3 className="text-2xl font-bold text-[#3a2a25]">
              Swap-It
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#A97868]">
              Plateforme d’échange de cadeaux
            </p>

            <p className="mt-4 leading-7 text-[#6f5a52]">
              Application web collaborative permettant d’organiser des
              échanges de cadeaux entre participants, avec profils, groupes,
              pige et messagerie intégrée.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#6f5a52]">
              <li>• Conception des fonctionnalités principales.</li>
              <li>• Contribution au module de chat.</li>
              <li>• Structure de données Firebase / Firestore.</li>
              <li>• Réflexion sur les accès et la confidentialité.</li>
            </ul>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl"
        >
          <div className="relative overflow-hidden rounded-t-[2rem] bg-white/40">
            <video
              src={starboostVideo}
              className="h-[260px] w-full object-cover sm:h-[310px]"
              autoPlay
              muted
              loop
              playsInline
              controls
            />

            <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#3a2a25] shadow-lg backdrop-blur-md">
              Démo vidéo
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-5 inline-flex w-fit rounded-full bg-[#A97868]/10 px-4 py-2 text-sm font-semibold text-[#A97868]">
              Concept / MVP
            </div>

            <h3 className="text-2xl font-bold text-[#3a2a25]">
              StarBoost
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#A97868]">
              SaaS de gestion automatisée des avis
            </p>

            <p className="mt-4 leading-7 text-[#6f5a52]">
              Concept de système automatisé pour commerces de services
              locaux, visant à améliorer le référencement local par la
              collecte intelligente d’avis clients.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#6f5a52]">
              <li>• Workflow SMS après rendez-vous ou paiement.</li>
              <li>• Redirection des avis positifs vers Google / Facebook.</li>
              <li>• Gestion privée des clients insatisfaits.</li>
              <li>
                • Recherche d’intégrations Square, Stripe, Go Rendez-vous et
                Twilio.
              </li>
            </ul>

            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#A97868]">
              Produit en conception
            </span>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl"
        >
          <div className="relative overflow-hidden rounded-t-[2rem] bg-white/40">
            <video
              src={laruelleVideo}
              className="h-[260px] w-full object-cover sm:h-[310px]"
              autoPlay
              muted
              loop
              playsInline
              controls
            />

            <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#3a2a25] shadow-lg backdrop-blur-md">
              Démo vidéo
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-5 inline-flex w-fit rounded-full bg-[#A97868]/10 px-4 py-2 text-sm font-semibold text-[#A97868]">
              Architecture produit
            </div>

            <h3 className="text-2xl font-bold text-[#3a2a25]">
              La Ruelle
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#A97868]">
              Plateforme de troc local
            </p>

            <p className="mt-4 leading-7 text-[#6f5a52]">
              Concept de plateforme locale basée sur l’échange d’objets, de
              services et de compétences entre membres d’une communauté.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#6f5a52]">
              <li>
                • Définition des offres, recherches, profils et catégories.
              </li>
              <li>• Système de tags pour le matchmaking.</li>
              <li>• Notifications lors des correspondances.</li>
              <li>• Réflexion sur un système de tokens d’échange.</li>
            </ul>

            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#A97868]">
              Concept en structuration
            </span>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl"
        >
          <div className="relative overflow-hidden rounded-t-[2rem] bg-black">
            <iframe
              className="h-[260px] w-full sm:h-[310px]"
              src="https://www.youtube.com/embed/vTWqmjkrVv8"
              title="Démonstration vidéo du site Royal LePage Tendance"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#3a2a25] shadow-lg backdrop-blur-md">
              Démo vidéo
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-5 inline-flex w-fit rounded-full bg-[#A97868]/10 px-4 py-2 text-sm font-semibold text-[#A97868]">
              Mars 2025 — Juillet 2025
            </div>

            <h3 className="text-2xl font-bold text-[#3a2a25]">
              Royal LePage Tendance
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#A97868]">
              Projet web en équipe
            </p>

            <p className="mt-4 leading-7 text-[#6f5a52]">
              Développement en équipe du site web de Royal LePage Tendance,
              incluant une infrastructure cloud Azure, des API backend, une
              base de données relationnelle et un outil de clavardage intégré.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#6f5a52]">
              <li>• Coordination Agile et suivi des livrables.</li>
              <li>• Backlog, sprints et documentation fonctionnelle.</li>
              <li>• Collaboration avec les équipes web et mobile.</li>
              <li>• Traduction des besoins d’affaires en récits utilisateurs.</li>
            </ul>
          </div>
        </motion.article>
      </div>
    </div>
  </div>
</section>

      {/* =========================
          COMPÉTENCES
      ========================= */}
      <section id="skills" className="relative px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A97868] sm:text-sm md:tracking-[0.35em]">
              Compétences
            </p>

            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#3a2a25] md:text-5xl">
                Une approche structurée, humaine et orientée résultats.
              </h2>

              <p className="max-w-md text-base leading-7 text-[#6f5a52]">
                Je combine coordination, compréhension technique, esprit
                d’analyse et communication claire pour faire avancer les projets.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Gestion de projet",
                  items: [
                    "Suivi des priorités",
                    "Coordination des livrables",
                    "Gestion des échéanciers",
                    "Relation client",
                  ],
                },
                {
                  title: "Approche Agile",
                  items: [
                    "Scrum",
                    "Kanban",
                    "Backlog",
                    "Sprints",
                    "Rituels Agile",
                  ],
                },
                {
                  title: "Communication",
                  items: [
                    "Vulgarisation technique",
                    "Gestion des attentes",
                    "Suivi des parties prenantes",
                    "Présentation de livrables",
                  ],
                },
                {
                  title: "Analyse numérique",
                  items: [
                    "SEO",
                    "GEO",
                    "Optimisation de contenu",
                    "Fiches Google",
                    "Contrôle qualité",
                  ],
                },
                {
                  title: "Conception produit",
                  items: [
                    "MVP",
                    "Preuve de concept",
                    "Parcours utilisateur",
                    "Architecture fonctionnelle",
                    "Validation de besoins",
                  ],
                },
                {
                  title: "Outils",
                  items: [
                    "Jira",
                    "ServiceNow",
                    "Trello",
                    "Asana",
                    "Teams",
                    "Azure",
                    "Firebase / Firestore",
                  ],
                },
              ].map((skill) => (
                <motion.article
                  key={skill.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-[2rem] border border-white/60 bg-white/35 p-6 shadow-xl shadow-[#6f5a52]/10 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-bold text-[#3a2a25]">
                    {skill.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#A97868]/20 bg-white/45 px-3 py-2 text-sm font-medium text-[#6f5a52]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}
      <section id="contact" className="relative px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/35 shadow-2xl shadow-[#6f5a52]/10 backdrop-blur-xl"
          >
            <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
              <div className="p-6 md:p-12">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A97868] sm:text-sm md:tracking-[0.35em]">
                  Contact
                </p>

                <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[#3a2a25] md:text-5xl">
                  Envie de discuter d’un rôle, d’un projet ou d’une
                  collaboration?
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#6f5a52] md:text-lg">
                  Je suis disponible pour des opportunités en gestion de projets
                  numériques, coordination Agile, analyse fonctionnelle et
                  accompagnement de projets web.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="mailto:cindy.bragdon@gmail.com"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#A97868] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a97868]/25 transition hover:-translate-y-0.5 hover:bg-[#956454]"
                  >
                    Écrire un courriel
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/cindy-bragdon/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A97868]/30 bg-white/40 px-6 py-3 text-sm font-semibold text-[#5a4038] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/70"
                  >
                    <ExternalLink size={17} />
                    LinkedIn
                  </a>

                  <a
                    href="/cv-cindy-bragdon.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/45 px-6 py-3 text-sm font-semibold text-[#5a4038] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/75"
                  >
                    Consulter mon CV
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] bg-[#A97868]/10 p-6 md:p-12">
                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#d9b5a7] blur-3xl" />
                <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-[#b98b7a] blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between rounded-[2rem] border border-white/60 bg-white/35 p-6 backdrop-blur-xl">
                  <div>
  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A97868]">
    Disponible
  </p>

  <h3 className="mt-4 text-2xl font-bold leading-tight text-[#3a2a25]">
    Pour contribuer à des projets clairs, humains et bien orchestrés.
  </h3>

  <SignatureAccent />
</div>

                  <div className="mt-10 space-y-4 text-[#6f5a52]">
                    <p className="flex items-center gap-3 break-all sm:break-normal">
                      <Mail size={18} className="shrink-0 text-[#A97868]" />
                      cindy.bragdon@gmail.com
                    </p>

                    <p className="flex items-center gap-3 break-all">
                      <ExternalLink
                        size={18}
                        className="shrink-0 text-[#A97868]"
                      />
                      linkedin.com/in/cindy-bragdon/
                    </p>

                    <p className="text-sm leading-6">
                      Basée à Terrebonne, Québec — ouverte aux projets hybrides,
                      remote ou en présentiel selon le contexte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <p className="mt-10 text-center text-sm text-[#6f5a52]">
            © {new Date().getFullYear()} Cindy Bragdon — Portfolio numérique.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;