import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "À propos", href: "#about" },
    { label: "Expériences", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 w-[92%] max-w-5xl -translate-x-1/2 rounded-[1.75rem] border border-white/50 bg-white/40 px-4 py-3 shadow-lg shadow-[#6f5a52]/10 backdrop-blur-xl md:rounded-full md:px-5"
    >
      <nav className="flex items-center justify-between gap-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-bold tracking-wide text-[#3a2a25]"
        >
          Cindy Bragdon
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6f5a52] transition hover:text-[#A97868]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:cindy.bragdon@gmail.com"
          className="hidden rounded-full bg-[#A97868] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#a97868]/25 transition hover:-translate-y-0.5 hover:bg-[#956454] sm:inline-flex"
        >
          Me joindre
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#A97868]/20 bg-white/45 text-[#5a4038] backdrop-blur-md md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="mt-4 grid gap-2 border-t border-white/50 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#6f5a52] transition hover:bg-white/45 hover:text-[#A97868]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="mailto:cindy.bragdon@gmail.com"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#A97868] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#a97868]/25"
              >
                Me joindre
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;