import { Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="font-serif text-3xl md:text-4xl mb-8">Joëlle</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">Contact</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a
                  href="tel:+97144567890"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +971 4 456 7890
                </a>
                <a
                  href="mailto:info@maisondejoelle.com"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@maisondejoelle.com
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">Follow Us</h3>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Maison de Joëlle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
