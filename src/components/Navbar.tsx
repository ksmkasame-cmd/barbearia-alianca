import { useEffect, useState } from 'react'
import { EXT, WHATSAPP_URL } from '../config'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-b border-[#e4a638]/15 bg-black/85' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <a href="#inicio" aria-label="Ir para o início" className="font-display text-lg font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-[#e4a638]">
          Barbearia <span className="text-gold">Aliança</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#experiencia" className="hidden text-sm text-white/70 hover:text-gold focus:outline-none focus:ring-2 focus:ring-[#e4a638] md:block">Experiência</a>
          <a href="#avaliacoes" className="hidden text-sm text-white/70 hover:text-gold focus:outline-none focus:ring-2 focus:ring-[#e4a638] md:block">Avaliações</a>
          <a href="#visite" className="hidden text-sm text-white/70 hover:text-gold focus:outline-none focus:ring-2 focus:ring-[#e4a638] md:block">Localização</a>
          <a
            href={WHATSAPP_URL}
            {...EXT}
            aria-label="Agendar horário pelo WhatsApp"
            className="inline-flex min-h-[48px] items-center rounded-sm border border-gold px-5 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-[#e4a638]"
          >
            Agendar
          </a>
        </div>
      </nav>
    </header>
  )
}
