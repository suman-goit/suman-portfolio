import { ArrowUpRight, ExternalLink, Github, Layers3 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { project, profile } from '../data'

export default function Projects() {
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionHeading eyebrow="Selected work" title="Projects with a purpose." description="A look at what I’ve been learning through hands-on development." />
      <article className="project-card">
        <div className="project-art">
          <div className="project-window">
            <div className="window-bar"><i /><i /><i /><span>nepali-diet-planner</span></div>
            <div className="mock-content">
              <div className="mock-label">DAILY NUTRITION</div>
              <div className="mock-title">Eat well.<br /><span>Live better.</span></div>
              <div className="nutrition-row"><div className="nutrition-ring"><span>68%</span></div><div className="nutrition-bars"><i /><i /><i /></div></div>
              <div className="food-pills"><span>Dal bhat</span><span>Seasonal foods</span><span>Balanced meals</span></div>
            </div>
          </div>
          <span className="art-decoration art-one" /><span className="art-decoration art-two" />
        </div>
        <div className="project-info">
          <div className="project-kicker"><span className="project-status" /> Featured project <span className="project-year">Full-stack</span></div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          <div className="project-actions">
            <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">View live project <ExternalLink size={16} /></a>
            <a className="project-github" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub profile <ArrowUpRight size={14} /></a>
          </div>
          <p className="project-footnote"><Layers3 size={14} /> Built to practice frontend and backend integration.</p>
        </div>
      </article>
    </section>
  )
}