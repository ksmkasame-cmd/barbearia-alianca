import { Instagram, MessageCircle } from 'lucide-react'
import { EXT, INSTAGRAM_URL, WHATSAPP_URL } from '../config'

const iconLink =
  'inline-flex h-12 w-12 items-center justify-center rounded-sm text-white/70 transition-colors hover:text-gold focus:outline-none focus:ring-2 focus:ring-[#e4a638]'

export default function Footer() {
  return (
    <footer className="border-t border-[#e4a638]/20 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold">Barbearia <span className="text-gold">Aliança</span></p>
          <p className="mt-1 text-sm text-white/50">© {new Date().getFullYear()} Barbearia Aliança. Todos os direitos reservados.</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={INSTAGRAM_URL} {...EXT} aria-label="Instagram da Barbearia Aliança" className={iconLink}>
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href={WHATSAPP_URL} {...EXT} aria-label="WhatsApp da Barbearia Aliança" className={iconLink}>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
