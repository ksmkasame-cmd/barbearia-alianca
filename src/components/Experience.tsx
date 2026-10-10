import { motion } from 'framer-motion'
import { Car, Clock, Coffee, Snowflake, UserCheck } from 'lucide-react'

const items = [
  { icon: Car, title: 'Estacionamento exclusivo', text: 'Chegue sem preocupação com vaga.' },
  { icon: Snowflake, title: 'Ambiente climatizado', text: 'Conforto em qualquer época do ano.' },
  { icon: Coffee, title: 'Cafezinho sempre pronto', text: 'Para aguardar ou aproveitar o momento.' },
  { icon: UserCheck, title: 'Profissionais de alto nível', text: 'Guilherme e Dani, referência em técnica.' },
  { icon: Clock, title: 'Pontualidade garantida', text: 'Seu horário é respeitado, sempre.' },
]

export default function Experience() {
  return (
    <section id="experiencia" className="bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-4xl font-bold md:text-5xl">Uma Experiência Muito Além do Corte</h2>
          <p className="mt-4 text-lg text-white/70">Cada detalhe do nosso espaço foi pensado para o seu conforto.</p>
        </motion.div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-sm border border-[#e4a638]/10 bg-matte p-6 transition-colors duration-300 hover:border-[#e4a638] focus-within:border-[#e4a638]"
            >
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
