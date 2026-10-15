import { Code2, Compass, Layers3 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const values = [
  { icon: Code2, title: 'Build with purpose', text: 'I like working on useful applications that solve clear, real-world problems.' },
  { icon: Layers3, title: 'Understand the stack', text: 'From React interfaces to Django APIs, I’m learning how the pieces work together.' },
  { icon: Compass, title: 'Keep improving', text: 'I’m focused on strengthening fundamentals, writing clearer code, and learning through projects.' },
]

export default function About() {
  return (
    <section className="section-wrap section-block" id="about">
      <SectionHeading eyebrow="A little about me" title="Learning by building." description="A student developer focused on the fundamentals behind good software." />
      <div className="about-layout">
        <div className="about-copy">
          <p className="lead-copy">I’m a Computer Engineering student at IOE, Purwanchal Campus in Dharan, Nepal, with a growing interest in backend engineering and full-stack web development.</p>
          <p>Working on my Nepali Diet Planner project gave me practical experience connecting a React frontend to a Django REST Framework backend, and helped me explore APIs, authentication, and application logic. I’m now building on that experience while preparing for a software engineering internship.</p>
          <a className="text-link" href="mailto:wills6781@gmail.com">Let’s connect <ArrowLink /></a>
        </div>
        <div className="value-list">
          {values.map(({ icon: Icon, title, text }, i) => (
            <article className="value-item" key={title}>
              <div className="value-icon"><Icon size={19} /></div>
              <div><span className="value-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowLink() {
  return <span aria-hidden="true">↗</span>
}