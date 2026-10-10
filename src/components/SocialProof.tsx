import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  'Pessoal top e pontual no atendimento eu e meu filho cortamos a anos com eles .',
  'Experiência ótima, ótimos profissionais Guilherme e Dani Super recomendo',
  'Barbearia bonita, com estacionamento, cafezinho e o melhor: o trampo dos caras.',
]

function Stars({ size = 'h-4 w-4' }: { size?: string }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${size} fill-gold text-gold`} aria-hidden="true" />
      ))}
    </>
  )
}

export default function SocialProof() {
  return (
    <section id="avaliacoes" className="border-t border-[#e4a638]/15 bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex justify-center gap-2" role="img" aria-label="Nota 4,9 de 5 estrelas">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Star className="h-8 w-8 fill-gold text-gold md:h-10 md:w-10" aria-hidden="true" />
              </motion.span>
            ))}
          </div>
          <p className="mt-6 font-display text-7xl font-bold text-gold md:text-8xl">4,9</p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/70">Estrelas · 113 Avaliações</p>
          <h2 className="mt-16 font-display text-4xl font-bold md:text-5xl">A Voz dos Nossos Clientes</h2>
          <p className="mt-4 text-lg text-white/70">Avaliações reais de quem frequenta a nossa cadeira.</p>
        </div>

        <ul className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {reviews.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex w-[85%] shrink-0 snap-center flex-col rounded-sm border border-[#e4a638]/15 bg-matte p-8 md:w-auto"
            >
              <div className="flex gap-1"><Stars /></div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-white/85">“{r}”</blockquote>
              <p className="mt-6 text-xs uppercase tracking-widest text-white/50">Cliente · Google</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
