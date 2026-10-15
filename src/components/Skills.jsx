import { Braces, Code2, Database, Server } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data'

const icons = [Code2, Braces, Server, Database]

export default function Skills() {
  return (
    <section className="section-wrap section-block" id="skills">
      <SectionHeading eyebrow="My toolkit" title="Skills in progress." description="Technologies I’ve worked with and fundamentals I’m continuing to develop." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index]
          return <article className="skill-card" key={group.title}>
            <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div>
            <h3>{group.title}</h3>
            <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          </article>
        })}
      </div>
      <p className="skills-note"><span /> I value strong fundamentals and honest progress over buzzwords.</p>
    </section>
  )
}