import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Suman Goit home">
        <span className="brand-mark">S<span>.</span></span>
        <span className="brand-name">Suman Goit</span>
      </a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>Email me <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}