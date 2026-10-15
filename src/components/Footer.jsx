import { ArrowUpRight, Github } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>{profile.name}</span></a>
      <p>Designed with intention. Built while learning.</p>
      <div className="footer-right"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a><span>© {new Date().getFullYear()} Suman Kumar Goit</span></div>
    </footer>
  )
}