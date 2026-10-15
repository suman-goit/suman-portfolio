import { ArrowDown, ArrowUpRight, Github, MapPin } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" /> Open to software engineering internships</div>
        <p className="hero-intro">Hello, I’m</p>
        <h1><br /><span>Suman Goit</span></h1>
        <h2 className="hero-role">Computer Engineering student <span className="role-divider">/</span> Backend &amp; Full-stack Developer</h2>
        <p className="hero-description">
          I build practical web applications and enjoy turning ideas into reliable, useful software. Currently strengthening my backend engineering skills while exploring the full stack.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="button button-secondary" href={`mailto:${profile.email}`}>Email me</a>
        </div>
        <div className="hero-meta">
          <span><MapPin size={15} /> {profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub profile <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-glow" />
        <div className="portrait-frame">
          <img src="/images/suman.jpg" alt="Suman Kumar Goit" className="portrait" />
        </div>
        <div className="portrait-caption">
          <span className="caption-line" />
          <div><strong>Networking enthusiast</strong><small>Building safe backend</small></div>
        </div>
        <div className="floating-tag"><span className="tag-symbol">{'{ }'}</span><span>Learning<br /><strong>by building</strong></span></div>
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
    </section>
  )
}