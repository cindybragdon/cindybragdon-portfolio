import { motion } from "framer-motion";

function Sparkle({ className = "", delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, y: 4 }}
      animate={{
        opacity: [0.25, 0.9, 0.25],
        scale: [0.85, 1.1, 0.85],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 2.6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute text-[#c79a89] ${className}`}
      aria-hidden="true"
    >
      ✦
    </motion.span>
  );
}

function SignatureAccent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-6 overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/30 px-5 py-6 shadow-inner shadow-[#6f5a52]/5 backdrop-blur-md"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto flex min-h-[150px] w-full max-w-[360px] flex-col items-center justify-center sm:min-h-[170px]"
      >
        <Sparkle className="left-[10%] top-[16%] text-sm sm:text-base" delay={0.2} />
        <Sparkle className="right-[14%] top-[24%] text-xs sm:text-sm" delay={0.8} />
        <Sparkle className="bottom-[18%] right-[20%] text-sm" delay={1.3} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 text-center text-[2.5rem] leading-none text-[#a97868] sm:text-[3rem] md:text-[3.2rem]"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          Cindy Bragdon
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
          className="mt-2 h-[2px] w-[70%] origin-left rounded-full bg-gradient-to-r from-transparent via-[#c79a89] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-4 text-center text-xs uppercase tracking-[0.26em] text-[#b78a79] sm:text-sm"
        >
          Gestion de projets numériques
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default SignatureAccent;