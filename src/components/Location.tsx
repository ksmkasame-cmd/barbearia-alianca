import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { EXT, MAPS_URL, WHATSAPP_URL } from '../config'

export default function Location() {
  return (
    <section id="visite" className="border-t border-[#e4a638]/15 bg-black px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl font-bold leading-tight lg:text-6xl">Venha nos Visitar</h2>
          <p className="mt-4 text-lg text-white/70">Ambiente pronto para te receber.</p>
          <ul className="mt-8 space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>Avenida Ipanema, 738 - Sorocaba</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>Horário: 09h às 20h (Seg–Sáb)</span>
            </li>
          </ul>
          <a
            href={WHATSAPP_URL}
            {...EXT}
            aria-label="Agendar meu horário via WhatsApp"
            className="mt-10 inline-flex min-h-[48px] animate-softpulse items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#e4a638] focus:ring-offset-2 focus:ring-offset-black"
          >
            Agendar meu Horário via WhatsApp
          </a>
        </motion.div>

        {/* Placeholder geométrico no lugar do mapa / fachada */}
        <a
          href={MAPS_URL}
          {...EXT}
          aria-label="Abrir a localização da Barbearia Aliança no Google Maps"
          className="group relative block aspect-[4/3] overflow-hidden rounded-sm border border-[#e4a638]/15 bg-matte transition-colors hover:border-[#e4a638] focus:outline-none focus:ring-2 focus:ring-[#e4a638]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(#e4a638 1px, transparent 1px), linear-gradient(90deg, #e4a638 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <MapPin className="h-14 w-14 text-gold" strokeWidth={1.25} aria-hidden="true" />
            <p className="font-display text-xl">Av. Ipanema, 738</p>
            <p className="text-xs uppercase tracking-widest text-gold">Ver no Google Maps</p>
          </div>
        </a>
      </div>
    </section>
  )
}
