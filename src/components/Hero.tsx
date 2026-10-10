import { motion } from 'framer-motion'
import { CTA_CLASS, EXT, WHATSAPP_URL } from '../config'

const item = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.15 * i, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[85vh] items-center overflow-hidden bg-black pt-16 md:min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black md:left-1/2 md:border-l md:border-[#e4a638]/15"
      >
        <img
          src={`${import.meta.env.BASE_URL}hero.png`}
          alt=""
          width={735}
          height={898}
          fetchPriority="high"
          className="h-full w-full object-cover object-[50%_25%] grayscale brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-black/70 md:hidden" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <motion.p {...item(0)} className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Barbearia Aliança
          </motion.p>
          <motion.h1 {...item(1)} className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            A Barbearia Premium de Sorocaba.
          </motion.h1>
          <motion.p {...item(2)} className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
            Excelência em cada detalhe. O atendimento pontual e o ambiente projetado para quem não abre mão do melhor.
          </motion.p>
          <motion.div {...item(3)} className="mt-10">
            <a href={WHATSAPP_URL} {...EXT} aria-label="Agendar meu horário pelo WhatsApp" className={CTA_CLASS}>
              Agendar Meu Horário
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
